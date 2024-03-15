import React, { useState, useEffect } from 'react';
import '../../styles/index.css';

function SecondsCounter({ seconds }) {
    // Convert the seconds to an array of digits
    const digitArray = String(seconds).split('');
  
    return (
      <div className="counter-container">
        <div className="counter-title">Seconds Counter</div>
        <div className="flip-clock">
          {digitArray.map((digit, index) => (
            <div key={index} className="number-container">
              <span className="number">{digit}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default SecondsCounter;



export function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <SecondsCounter seconds={seconds} />;
}

