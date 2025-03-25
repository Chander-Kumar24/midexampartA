import React, { useState } from 'react'

function CountDownlightSwitch() {
    const[currenttheme,setCurrentTheme]=useState("light");
    const[currentTime,setCurrentTime]=useState("0")

    function StartTime(){
            if(currentTime==0){
                
            }
    }
    function ResetTime(){
        setCurrentTime("0")
        
    }
    function HandleToggle(){
        setCurrentTheme((e)=>{ 
            if(e.target.value=="light"){
                setCurrentTheme("dark")
            }
        })
    }
  return (
        <>
        <div class="container">
    <!-- Header with Title and Theme Toggle -->
    <div class="header">
      <h1>Countdown & Light Switch</h1>
      <div class="toggle-container">
        <label class="toggle-switch">
          <input value= " toggle"type="checkbox" id="themeToggle" onClick={setCurrentTheme((e)=>{e.target.value})}/>
          <span class="slider"></span>
        </label>
        <span>Light Mode</span>
      </div>
    </div>

    <!-- Timer and Progress Section -->
    <div class="timer-section">
      <div class="progress-bar">
        <div class="progress" id="progress"></div>
      </div>
      <div class="timer" id="timerDisplay">30s</div>
      <div class="btn-group">
        <button id="startButton">Start Timer</button>
        <button id="resetButton" style="display: none;">Reset Timer</button>
      </div>
      <div class="message" id="messageArea"></div>
    </div>
  </div>
        </>
  )
}

export default CountDownlightSwitch