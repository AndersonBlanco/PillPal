// server.js - Express server for iPhone to Arduino communication

const express = require('express');
const cors = require('cors');
const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// Initialize express app
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Arduino serial connection configuration
const ARDUINO_PORT = 'COM3'; // Change this to the correct port for your system
const BAUD_RATE = 9600;

// Set up serial connection to Arduino
const serialPort = new SerialPort({
  path: ARDUINO_PORT,
  baudRate: BAUD_RATE,
  autoOpen: false,
});

// Create parser
const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\n' }));

// Open serial connection
serialPort.open((err) => {
  if (err) {
    return console.error(`Failed to open serial port: ${err.message}`);
  }
  console.log(`Serial port ${ARDUINO_PORT} opened at ${BAUD_RATE} baud`);
});

// Serial port error handling
serialPort.on('error', (err) => {
  console.error('Serial port error:', err.message);
});

// Listen for incoming data from Arduino
parser.on('data', (data) => {
  console.log('Arduino says:', data);
});

// Test route
app.get('/', (req, res) => {
  res.send('Arduino Bridge Server Running');
});

// Send command to Arduino
app.get('/arduino', (req, res) => {
  const command = req.query.command;

  if (!command) {
    return res.status(400).json({ 
      status: 'error', 
      message: 'No command provided in query'
    });
  }

  console.log(`GET request - Sending to Arduino: ${command}`);

  serialPort.write(`${command}\n`, (err) => {
    if (err) {
      return res.status(500).json({ 
        status: 'error', 
        message: err.message 
      });
    }

    res.json({ 
      status: 'success', 
      message: `Command '${command}' sent to Arduino` 
    });
  });
});


// Arduino connection status
app.get('/arduino/status', (req, res) => {
  res.json({
    status: serialPort.isOpen ? 'connected' : 'disconnected',
    port: ARDUINO_PORT,
    baudRate: BAUD_RATE,
  });
});

// Start server
app.listen(PORT, (d) => {
  console.log(`Server running at http://192.168.56.1:${PORT}`);
});



// Graceful shutdown
process.on('SIGINT', () => {
  console.log('Closing serial port and shutting down server...');
  if (serialPort.isOpen) {
    serialPort.close(() => {
      process.exit();
    });
  } else {
    process.exit();
  }
});
