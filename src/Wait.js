import React, {useState} from "react"
import timer from "./Store"

function Wait(){
    const [active, setActive] = useState(false)
    const handleClick = () => {
        if(!active){
            setActive(true)
            setTimeout(() => setActive(false), 300)
        } else {
            if(timer.ongoing)
                timer.switchup()
        }
    }

    return(
        <button onClick={handleClick}>Wait</button>
    )
}

export default Wait;