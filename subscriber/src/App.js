import logo from './logo.svg';
import './App.css';
import MqttComponent from './MqttComponent';
import { useState } from 'react';

function App() {
  const [temperature, setTemperature] = useState('N/A');
  console.log(temperature);
  const updateTemperature = (newTemperature) => {
    setTemperature(newTemperature);
  };

  return (
    <div className="App">
      <h1>Current Temperature</h1>
      <h1>{temperature}</h1>°C
      <MqttComponent updateTemperature={updateTemperature} />
    </div>
  );
};

export default App;
