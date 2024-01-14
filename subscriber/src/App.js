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
      <h1 className="temperature-header">Current Temperature</h1>
      <h1 className="large-temperature">{temperature}°C</h1>
      <MqttComponent updateTemperature={updateTemperature} />
    </div>
  );
};

export default App;
