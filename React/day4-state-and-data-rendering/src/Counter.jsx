import React, { useState } from 'react'
const Counter = () => {
    console.log("Counter is Rendering......")
    const[count,setCount] = useState(0)
  return (
      <div>
          <h1>Counter is : {count}</h1>
          <button className="bg-blue-400 p-2 text-white m-2 rounded" onClick={()=>{setCount(count+1)}}>Increment</button>
          <button className="bg-blue-400 p-2 text-white m-2 rounded" onClick={()=>{setCount(count-1)}}>Decrement</button>
      </div>
  )
}

export default Counter