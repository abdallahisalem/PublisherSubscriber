// src/MqttComponent.js
import React, { useEffect } from 'react';
import mqtt from 'mqtt';

const MqttComponent = ({ updateTemperature }) => {
  useEffect(() => {
    const options = {
      username: 'abdallahi',
      password: '4PU!T_f2sCjeTLi',
      clientId: `mqttjs_${Math.random().toString(16).substr(2, 8)}`,
  };

  const client = mqtt.connect('wss://8cd9dd5759164c88b7339b12f44c0a43.s1.eu.hivemq.cloud:8884/mqtt', options);

client.on('connect', () => {
  console.log('Connected to MQTT broker');
  client.subscribe('Temp0');
});

client.on('error', (error) => {
  console.error('MQTT connection error:', error);
});

client.on('offline', () => {
  console.warn('MQTT client is offline');
})

client.on('close', () => {
  console.warn('MQTT connection closed');
});

client.on('reconnect', () => {
  console.log('Reconnecting to MQTT broker');
});

client.on('message', (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
  // Update your state or perform other actions here
});


    client.on('message', (topic, message) => {
      console.log(`Received message on topic ${topic}: ${message.toString()}`);
      updateTemperature(message.toString());
    });

    return () => {
      client.end();
    };
  }, [updateTemperature]);

  return null;
};

export default MqttComponent;
