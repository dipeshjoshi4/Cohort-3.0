import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState("asdasdsac")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    console.log(name)

    return (
        <div className='flex flex-col gap-4 w-60 h-60'>
            <input
                // onChange={(e) => console.log(e.target.value)}
                onChange={(e) => setName(e.target.value)}
                className="border-2 rounded"
                type="text"
                placeholder='Enter Name'
            />
            <input
                // onChange={(e) => console.log(e.target.value)}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 rounded"
                type="text"
                placeholder='Enter Email'
            />
            <input
                // onChange={(e) => console.log(e.target.value)}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 rounded"
                type="text"
                placeholder='Enter Password'
            />
            <h1>This is Name - {name}</h1>
            <h1>This is Email - {email}</h1>
            <h1>This is Password - {password}</h1>
        </div>
    )
}

export default Form


//?3 APPROCH FOR INPUT HANDLING

//?1-BruteForce
//-> onChange={(e) => console.log(e.target.value)} from this we get value but its not reach  react so we -> useState
//-> with this method we bind out input chnage value to react's useState
//-> but when then where is more input you need to have every input field have new usestate so that its work

//- this brute force method where we use DRY disqualified(by using multiple state for different input) so we move on the better 

//?2-Better
//3-Optimized