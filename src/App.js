import './App.css';
import React, { useEffect, useRef } from "react";
import Reset from "./Reset";
import Wait from "./Wait";
import StartStop from "./StartStop";
import timer from "./Store";
import useObservable from "./hooks"
import { combineLatest } from "rxjs";

function App() {

    const globalObservable = combineLatest(timer.currentTime, timer.currentStatus, /*timer.iWannaDie*/)
    const global = useObservable(globalObservable, globalObservable)
    const moving = useRef(null)

  useEffect(() => {
    if(timer.ongoing) {
      clearTimeout(moving.current)
      moving.current = setTimeout(timer.yepCock, 1000);
    } else {
      clearTimeout(moving.current)
    }
  },[global])

  return (
      <>
        <div className="App">
          <p>
            {doubleDig(timer.time/60/60)} : {doubleDig((timer.time/60)%60)} : {doubleDig(timer.time % 60)}
          </p>
        </div>
        <div className="App">
          <Reset/>
          <Wait/>
          <StartStop/>
        </div>
      </>
  );
}

function doubleDig(num){
  return num < 10 ? '0' + Math.floor(num) : Math.floor(num);
}

export default App;
