import React, {useState, useEffect} from "react"

function StartStop(props){
    const [name, setName] = useState("Start")

useEffect(() => {
    if(props.ongoing){
        setName("Stop")
    } else {
        setName("Start")
    }

}, [props.ongoing])

    function handleClick() {
        props.switching()
    }
    return(
        <button onClick={handleClick}>{name}</button>
    )
}

export default StartStop;