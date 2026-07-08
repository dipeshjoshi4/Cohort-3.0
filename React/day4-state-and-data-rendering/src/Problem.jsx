import React, { useState } from 'react'
const Problem = () => {
    console.log("Counter is Rendering......")
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Counter is : {count}</h1>
            <button className="bg-blue-400 p-2 text-white m-2 rounded"
                onClick={() => {
                    setCount(prev => prev + 1)
                    setCount((prev) => prev + 1)
                    setCount((prev) => { return prev + 1 })
                    // setCount(count + 1)
                    // setCount(count + 1)
                }}>
                Increment
            </button>
        </div>
    )
}

export default Problem


// - when same set function call in same function multiple times a term born in react which is called -> "Batching"
// - what batching do is -> same set function call ko batch karke ek box bana deta hai which is


//?what is in the setFun() have "previous" means current
//- so to run logic atleast render still one time but with this method logic runs with previous like this.....
// setCount((prev)=>{prev+1})
