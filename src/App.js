import React, { useState } from 'react'
import './App.css'
import Settings from './Settings'
import SettingsContext from './SettingsContext'
import Timer from './Timer'

function App() {



  const [showSettings , setShowSettings] = useState(true)
  const [workMinutes , setWorkMinutes] = useState(45)
  const [breakMinutes , setBreakMinutes] = useState(15)
  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        <h2>POMODORO TIMER</h2>
{showSettings ?       <Settings setShowSettings={setShowSettings} workMinutes={workMinutes} breakMinutes={breakMinutes} setWorkMinutes={setWorkMinutes} setBreakMinutes={setBreakMinutes}/>
:       <Timer setShowSettings={setShowSettings} workMinutes={workMinutes} breakMinutes={breakMinutes} setWorkMinutes={setWorkMinutes} setBreakMinutes={setBreakMinutes} />

}
</SettingsContext.Provider>
    </main>
  )
}

export default App
