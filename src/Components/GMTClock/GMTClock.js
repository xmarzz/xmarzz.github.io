
import React, { useState, useEffect } from 'react';
import './GMTClock.css';


const GMTClock = () => {
  const [dateTime, setDateTime] = useState('');
  const [time, setTime] = useState('');


  useEffect(()=>{
    const timer = setInterval(() =>{
        setTime(new Date().toLocaleTimeString())
        setDateTime(new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }))
    }, 1000)
    return () => clearInterval(timer)

  },[])


  return (
    <div className='clock'>
      <p>{dateTime}</p>
      <p>{time}</p>
    </div>
  );
};

export default GMTClock;


