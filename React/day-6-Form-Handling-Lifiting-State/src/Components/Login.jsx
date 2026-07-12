import React from 'react'

const Login = ({ setToggle }) => {
    return (
        <div className='w-90 bg-white border rounded-xl '>
            <form className='flex flex-col gap-4 text-center m-8'>
                <h1 className='text-2xl'>LOGIN</h1>
                <input className='p-2 border rounded' type="text" placeholder='Enter Email' />
                <input className='p-2 border rounded' type="text" placeholder='Enter Password' />
                <button className='p-2 border  bg-blue-400 text-white cursor-pointer'>Login</button>
            </form>
            <p className='text-center pb-4'>Didn't Have An Account! <span className='text-blue-500 underline cursor-pointer' onClick={()=>setToggle((prev) => !prev)}>Register Here</span></p>
        </div>
    )
}

export default Login