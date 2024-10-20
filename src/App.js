import React from 'react';
import Calculator from './Calculator';
import Typewriter from 'react-typewriter-effect';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>
        <Typewriter
          text="Simple Calculator"
          speed={100} 
          cursorColor="#007BFF" 
          typingDelay={500} 
        />
      </h1>
      <Calculator />
    </div>
  );
}

export default App;
