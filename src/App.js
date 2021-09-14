import './App.css';
import React, {useState, useEffect, useRef} from "react";
import Reset from "./Reset";
import Wait from "./Wait"
import StartStop from "./StartStop"


function App() {
  let [currentTime, setCurrentTime] = useState(0)
  let [ongoing, setOngoing] = useState(false)
  const moving = useRef(null)


  //const go

  useEffect(() => {

    function yepcock() {
      setCurrentTime(currentTime + 1)
    }

    if(ongoing) {
      moving.current = setTimeout(yepcock, 1000);
      //setTimeout(go, 1000);
    } else {
      clearTimeout(moving.current)
    }
  })

  const reset = () => {
    clearTimeout(moving.current);
    setCurrentTime(0);
  }

  const switchup = () => setOngoing(!ongoing);


  return (
      <>
        <div className="App">
          <p>
            {doubleDig(Math.floor(currentTime/60/60))} : {doubleDig(Math.floor((currentTime/60)%60))} : {doubleDig(currentTime % 60)}
          </p>
        </div>
        <div className="App">
          <Reset func={reset}/>
          <Wait func={switchup} status={ongoing}/>
          <StartStop switching={switchup} ongoing={ongoing}/>
        </div>
      </>
  );
}

function doubleDig(num){
  return num < 10 ? '0' + num : num;
}

export default App;
