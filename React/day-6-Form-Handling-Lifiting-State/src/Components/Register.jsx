import React, { useState } from 'react'

const Register = ({ setToggle,setUsers }) => {

    const [formData, setFormData] = useState({ name: "", email: "", password: "" ,image:""});

    const handleChange = (e) => {
        let { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // setUsers([...users, formData])
        setUsers((prev)=> [...prev,formData])
        setFormData({
            name: "",
            email: "",
            password: "",
            image:""
        })

    }

    return (
        <div className='w-90 bg-white border rounded-xl '>

            <form className='flex flex-col gap-4 text-center m-8' onSubmit={handleSubmit}>
                <h1 className='text-2xl'>REGISTER</h1>

                <input required value={formData.name} name="name" onChange={handleChange} className='p-2 border rounded' type="text" placeholder='Name' />

                <input required value={formData.image} name="image" onChange={handleChange} className='p-2 border rounded' type="url" placeholder='imgURL' />

                <input required value={formData.email} name="email" onChange={handleChange} className='p-2 border rounded' type="text" placeholder='Email' />

                <input required value={formData.password} name="password" onChange={handleChange} className='p-2 border rounded' type="password" placeholder='Password' />

                <button className='p-2 border-2  bg-blue-400 text-white cursor-pointer'>Register</button>

            </form>

            <p className='text-center pb-4'>Alredy Have An Account!
                <span className='text-blue-500 underline cursor-pointer' onClick={() => setToggle((prev) => !prev)}>Login Here</span>
            </p>

        </div>
    )
}

export default Register