import React, { useState } from "react";

function App() {
  setInterval(startTimer,1000)
  let [state,SetState]= useState(time)
  let time = new Date().toLocaleTimeString();
  console.log(time)
  function startTimer(){
    let timer = new Date().toLocaleTimeString();

    SetState(timer)
  }
  return (
    <div className="container">
      <h1> {state} </h1>
      <button onClick={startTimer} >Get Time</button>
    </div>
  );
}

export default App;
