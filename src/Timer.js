import React, { useEffect, useRef, useState } from 'react'
import { CircularProgressbar , buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Pausebutton from './Pausebutton';
import Playbutton from './Playbutton';
import Settingsbutton from './Settingsbutton';

import { useContext } from 'react';
import SettingsContext from './SettingsContext';
const red = '#f54e4e';
const green = '#4aec8c';

function Timer({setShowSettings , workMinutes , breakMinutes , setWorkMinutes , setBreakMinutes}) {

    const settingsInfo = useContext(SettingsContext)


    const [isPaused, setIsPaused] = useState(true);
    const [secondsLeft , setSecondsLeft] = useState(0)
      const [mode , setmode] = useState('work')
      const [modee , setmodee] = useState('work')
      const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }


      function initTimer(){
          secondsLeftRef.current = workMinutes * 60
          setSecondsLeft(secondsLeftRef.current)
 
      }

       
      function switchMode() {
        const nextMode = modeRef.current === 'work' ? 'break' : 'work';

        const nextModee = modeRef.current === 'work' ? 'break' : 'work';
        setmodee(nextModee)

        modeRef.current = nextModee
        modeRef.current === 'work' ? 'work' :'break';
        const nextSeconds = (nextMode === 'work' ? workMinutes : breakMinutes) * 60;
  
        setmode(nextMode);
        modeRef.current = nextMode;
  
        setSecondsLeft(nextSeconds);
        secondsLeftRef.current = nextSeconds;
      }
  
 
     const totalSeconds = mode === 'work' ? workMinutes * 60 : breakMinutes * 60
     const percentage = Math.round(secondsLeft / totalSeconds * 100) 

     const minutes = Math.floor(secondsLeft / 60);
     let seconds = secondsLeft % 60
     if(seconds < 10) seconds = '0'+seconds

      useEffect(() => {
        
        
          initTimer()
          const interval = setInterval(() => {
            if (isPausedRef.current) {
              return;
            }
            if (secondsLeftRef.current === 0) {
              return switchMode();
            }
           
            tick();
          },1000);
          return () => clearInterval(interval);
        } , [])
       
    return (
        <div>
           <CircularProgressbar value={percentage} text={minutes + ':' + seconds} styles={buildStyles({
               textColor:'#fff',
               pathColor:mode === 'work' ? red : green,
               trailColor:'rgba(255,255,255,0.2)'
           })} />
           <p>{modee}</p>

           <div className='play'>
           {isPaused
          ? <Playbutton onClick={() => { setIsPaused(false); isPausedRef.current = false; }} />
          : <Pausebutton onClick={() => { setIsPaused(true); isPausedRef.current = true; }} />}
           </div>
           <div className='play'>
           <Settingsbutton setShowSettings={setShowSettings}/>
           </div>
        </div>
    )
}

export default Timer
