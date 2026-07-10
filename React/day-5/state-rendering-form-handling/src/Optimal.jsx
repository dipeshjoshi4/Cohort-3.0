import React, { useState } from 'react'

const Optimal = () => {
    const [formData, setFormData] = useState({})
    console.log("FormData ->", formData)
    
    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value })
    // }
    const handleChange = (e) => {
        let {name,value} = e.target
        setFormData({ ...formData, [name]: value })
    }

    return (
        <div className='flex flex-col gap-4 w-60 h-60'>
            <input
                name="name"
                onChange={handleChange}
                className="border-2 rounded"
                type="text"
                placeholder='Enter Name'
            />
            <input
                name="email"
                onChange={handleChange}
                className="border-2 rounded"
                type="text"
                placeholder='Enter Email'
            />
            <input
                name="password"
                onChange={handleChange}
                className="border-2 rounded"
                type="text"
                placeholder='Enter Password'
            />
        </div>
    )
}

export default Optimal;


//?3 APPROCH FOR INPUT HANDLING
