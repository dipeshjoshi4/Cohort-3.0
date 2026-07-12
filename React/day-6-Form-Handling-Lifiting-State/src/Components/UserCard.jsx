import React from 'react'

const UserCard = ({user}) => {
    return (
        <div className='border-grey-400 border rounded p-4 bg-white flex flex-col gap-4'>
            <div className='w-50 h-60 rounded overflow-hidden'>
                <img className="w-full h-full" src={user.image} alt=""/>
            </div>
            <div>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
            </div>
            <button>delete</button>
        </div>
    )
}

export default UserCard