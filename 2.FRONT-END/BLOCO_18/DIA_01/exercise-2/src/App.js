import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import CarContext from './context/CarContext';
import TrafficContext from './context/TrafficContext';

function App() {
  return (
    <div className="container">
      <CarContext>
        <Cars />
      </CarContext>
      <TrafficContext>
        <TrafficSignal />
      </TrafficContext>
    </div>
  );
}

export default App;
