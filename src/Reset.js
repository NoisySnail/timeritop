import React from "react"
import timer from "./Store"

function Reset(){
    return(
        <button onClick={timer.reset}>Reset</button>
    )
}

export default Reset;