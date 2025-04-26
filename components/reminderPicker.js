import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';
import { useDispatch } from 'react-redux';
import { addPal } from '../myPillPalsSlice';

// Configure notifications
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const WeeklyTimerComponent = ({selectedPal_id}) => {
    const dispatch = useDispatch(); 
  const [selectedDay, setSelectedDay] = useState(1); // Monday by default (0 = Sunday, 1 = Monday, etc.)
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);
  const [isTimerSet, setIsTimerSet] = useState(false);
  const [scheduledNotificationId, setScheduledNotificationId] = useState(null);

  const daysOfWeek = [
    { id: 0, name: 'Sunday' },
    { id: 1, name: 'Monday' },
    { id: 2, name: 'Tuesday' },
    { id: 3, name: 'Wednesday' },
    { id: 4, name: 'Thursday' },
    { id: 5, name: 'Friday' },
    { id: 6, name: 'Saturday' },
  ];

  useEffect(() => {
    // Request notification permissions when component mounts
    registerForPushNotificationsAsync();
    
    // Clean up notifications when component unmounts
    return () => {
      if (scheduledNotificationId) {
        Notifications.cancelScheduledNotificationAsync(scheduledNotificationId);
      }
    };
  }, []);

  const registerForPushNotificationsAsync = async () => {
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      });
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== 'granted') {
      alert('Failed to get push token for notifications!');
      return;
    }
  };

  const handleTimeChange = (event, selectedDate) => {
    const currentDate = selectedDate || selectedTime;
    setShowTimePicker(Platform.OS === 'ios');
    setSelectedTime(currentDate);
  };

  const calculateNextOccurrence = () => {
    const now = new Date();
    let nextDate = new Date(now);
    
    // Set the time
    nextDate.setHours(selectedTime.getHours());
    nextDate.setMinutes(selectedTime.getMinutes());
    nextDate.setSeconds(0);
    
    // Calculate days until the next occurrence
    const currentDay = now.getDay();
    let daysUntilNext = selectedDay - currentDay;
    
    if (daysUntilNext < 0) {
      daysUntilNext += 7;
    } else if (daysUntilNext === 0) {
      // Same day, check if time has passed
      if (now > nextDate) {
        daysUntilNext = 7; // Schedule for next week
      }
    }
    
    nextDate.setDate(nextDate.getDate() + daysUntilNext);
    return nextDate;
  };

  const scheduleWeeklyNotification = async () => {
    // Cancel existing notification if any
    if (scheduledNotificationId) {
      await Notifications.cancelScheduledNotificationAsync(scheduledNotificationId);
    }

    const nextOccurrence = calculateNextOccurrence();
    
    //notification  object START ///////////////////////////////////////////////////
    const id = await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Weekly Reminder',
        body: `It's time for your ${daysOfWeek[selectedDay].name} reminder!`,
        sound: true,
      },
      trigger: {
        channelId: 'default',
        weekday: selectedDay + 1, // Expo uses 1-7 for weekdays
        hour: selectedTime.getHours(),
        minute: selectedTime.getMinutes(),
        repeats: true,
      },
    });
  //notification  object END ///////////////////////////////////////////////////


    setScheduledNotificationId(id);
    setIsTimerSet(true);
    
    // Calculate and display next occurrence
    const formattedDate = nextOccurrence.toLocaleDateString();
    const formattedTime = nextOccurrence.toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
    
    alert(`Weekly timer set for ${daysOfWeek[selectedDay].name}s at ${formattedTime}. First occurrence: ${formattedDate} at ${formattedTime}`);

    //modifying redux store 
    dispatch(addPal(selectedPal_id, id)); 
    
  };

  const cancelWeeklyNotification = async () => {
    if (scheduledNotificationId) {
      await Notifications.cancelScheduledNotificationAsync(scheduledNotificationId);
      setScheduledNotificationId(null);
      setIsTimerSet(false);
      alert('Weekly timer cancelled');

    //modifying redux store 
    dispatch(addPal(selectedPal_id, "")); 
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Weekly Reminder</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Day:</Text>
        <View style={styles.daysContainer}>
          {daysOfWeek.map((day) => (
            <TouchableOpacity
              key={day.id}
              style={[
                styles.dayButton,
                selectedDay === day.id && styles.selectedDayButton,
              ]}
              onPress={() => setSelectedDay(day.id)}
            >
              <Text style={[
                styles.dayButtonText,
                selectedDay === day.id && styles.selectedDayButtonText,
              ]}>
                {day.name.substring(0, 3)}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Time:</Text>
        <TouchableOpacity
          style={styles.timeSelector}
          onPress={() => setShowTimePicker(true)}
        >
          <Text style={styles.timeText}>
            {selectedTime.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </Text>
        </TouchableOpacity>
        
        {showTimePicker && (
          <DateTimePicker
            value={selectedTime}
            mode="time"
            display="default"
            onChange={handleTimeChange}
          />
        )}
      </View>
      
      <View style={styles.buttonContainer}>
        {!isTimerSet ? (
          <TouchableOpacity
            style={styles.setButton}
            onPress={scheduleWeeklyNotification}
          >
            <Text style={styles.buttonText}>Set Weekly Timer</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.cancelButton}
            onPress={cancelWeeklyNotification}
          >
            <Text style={styles.buttonText}>Cancel Timer</Text>
          </TouchableOpacity>
        )}
      </View>
      
      {isTimerSet && (
        <View style={styles.reminderInfo}>
          <Text style={styles.reminderInfoText}>
            Reminder set for every {daysOfWeek[selectedDay].name} at{' '}
            {selectedTime.toLocaleTimeString([], { 
              hour: '2-digit', 
              minute: '2-digit' 
            })}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dayButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    marginBottom: 8,
    minWidth: 80,
    alignItems: 'center',
  },
  selectedDayButton: {
    backgroundColor: '#4a90e2',
  },
  dayButtonText: {
    fontSize: 16,
  },
  selectedDayButtonText: {
    color: 'white',
    fontWeight: '600',
  },
  timeSelector: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  timeText: {
    fontSize: 18,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 24,
  },
  setButton: {
    backgroundColor: '#4caf50',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f44336',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  reminderInfo: {
    marginTop: 24,
    padding: 16,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
  },
  reminderInfoText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default WeeklyTimerComponent;