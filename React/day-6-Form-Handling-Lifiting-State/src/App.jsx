import React, { useState } from 'react'
import Login from './Components/Login'
import Register from './Components/Register'
import UserCard from './Components/UserCard'

const App = () => {
  const [toggle, setToggle] = useState(false)
  const [users, setUsers] = useState([])


  return (
    <div className='bg-gray-400 h-screen flex justify-center items-center'>

      {
        toggle ? (users.map((elem) => <UserCard user={elem} />))
          : <Register setUsers={setUsers} setToggle={setToggle} />
      }

      {/* {toggle ? <Login setToggle={setToggle} /> : <Register setUsers={setUsers} setToggle={setToggle} />} */}

    </div>
  )
}

export default App