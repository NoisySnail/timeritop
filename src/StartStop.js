import React from "react"
import timer from "./Store"

function StartStop(){
    function handleClick() {
        if(timer.ongoing){
            timer.switchup()
            timer.reset()
        } else {
            timer.switchup()
        }
    }
    return(
        <button onClick={handleClick}>{timer.name}</button>
    )
}

export default StartStop;