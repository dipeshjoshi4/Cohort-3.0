import React, { useState } from 'react'

const Counter = () => {
    let [count,setCount] = useState(0)

    console.log("counter is re-rendering",count)

  return (
    <div>
      <h1>COUNT IS : {count}</h1>
      <button onClick={()=>{
        setCount(prev => prev+1)
        setCount(prev => prev+1)
        setCount(prev => prev+1)
        
        }}>Increment</button>
    </div>
  )
}

export default Counter
