import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("")
    console.log(name)

    return (
        <div className='flex flex-col gap-4 w-60 h-60'>
            <input
                // onChange={(e) => console.log(e.target.value)}
                onChange={(e) => setName(e.target.value)}
                className="border-2 rounded" type="text" placeholder='Enter Name'
            />
            <button>Submit</button>
        </div>
    )
}

export default Form


//?3 APPROCH FOR INPUT HANDLING

//?1-BruteForce
//-> onChange={(e) => console.log(e.target.value)} from this we get value but its not reach  react so we -> useState
//-> with this method we bind out input chnage value to react's useState

//?2-Better
//3-Optimized