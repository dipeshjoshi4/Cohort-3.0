import React from 'react'

import { useState } from 'react';

const App = () => {
  console.log("app rendering....")

  const [count, setCount] = useState(0);
  // const [user, setUser] = useState({
  //   name: "Raman",
  // });
  let [user, setUser] = useState(0);
  return (
    <div>
      <h1>Count is - {count}</h1>
      <h1>name is - {user}</h1>

      <button className="p-2 bg-blue-500 text-white m-4" onClick={() => {
        setCount(count + 1)
      }}>
        Incremnt
      </button>

      {/* <button className="p-2 bg-blue-500 text-white m-4" onClick={() => {
        setUser({ name:"Piyush"})
      }}>Change</button> */}
      <button className="p-2 bg-blue-500 text-white m-4" onClick={() => {
        setUser(user++)
      }}>Change</button>
    </div>
  )
}

export default App

//useState -> own component re-render | app reredner | state update | provide interactivity