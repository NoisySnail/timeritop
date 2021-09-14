import React, {useState} from "react"

function Wait(props){
    const [active, setActive] = useState(false)
    const handleClick = () => {
        if(!active){
            setActive(true)
            setTimeout(() => setActive(false), 300)
        } else {
            if(props.status)
                props.func()
        }
    }

    return(
        <button onClick={handleClick}>Wait</button>
    )
}

export default Wait;