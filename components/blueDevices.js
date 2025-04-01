import React, { useState, useEffect } from 'react';
import { View, Text, Button, NativeEventEmitter } from 'react-native';
import { BleManager } from 'react-native-ble-plx'; // Named import for clarity

const init = new BleManager(); 
const BleStart = () => {
  const [manager, setManager] = useState(() => {
    try {
    
      return new NativeEventEmitter(init);
    } catch (e) {
      console.error('Failed to initialize BleManager:', e);
      return null;
    }
  });

  const [devices, setDevices] = useState([]);

  const startScan = () => {
    if (!manager) {
      alert('Bluetooth manager not initialized');
      return;
    }
    manager.state().then((state) => {
      if (state !== 'PoweredOn') {
        alert('Please enable Bluetooth on your phone.');
        return;
      }
      setDevices([]);
      manager.startDeviceScan(null, null, (error, device) => {
        if (error) {
          console.log('Scan error:', error);
          return;
        }
        setDevices((prev) => {
          if (!prev.find((d) => d.id === device.id)) {
            return [...prev, { id: device.id, name: device.name || 'Unknown' }];
          }
          return prev;
        });
      });
      setTimeout(() => {
        manager.stopDeviceScan();
        console.log('Scan stopped');
      }, 10000);
    });
  };

  useEffect(() => {
    return () => {
      if (manager) {
        manager.stopDeviceScan();
        manager.destroy();
      }else{
        alert("No Manager!")
      }
    };
  }, [manager]);

  return (
    <View style={{ padding: 20 }}>
      <Text>Bluetooth Devices:</Text>
      {devices.map((device) => (
        <Text key={device.id}>{device.name} ({device.id})</Text>
      ))}
      <Button title="Scan for Devices" onPress={startScan} />
    </View>
  );
};

export default BleStart;