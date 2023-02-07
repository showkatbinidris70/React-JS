import React, {useState} from 'react'

export default function HOOKS_USESTATE2() {
    const [count , setCount ] = useState(0)
    const eventHandaler = () =>{
        setCount(count+1)
    }
  
    return (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={eventHandaler}> Increment</button>
        </div>
    )
}
