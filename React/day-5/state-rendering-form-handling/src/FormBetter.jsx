import React, { useState } from 'react'

const FormBetter = () => {
    const [formData, setFormData] = useState({})
    console.log("FormData ->",formData)

    return (
        <div className='flex flex-col gap-4 w-60 h-60'>
            <input
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="border-2 rounded"
                type="text"
                placeholder='Enter Name'
            />
            <input
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="border-2 rounded"
                type="text"
                placeholder='Enter Email'
            />
            <input
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="border-2 rounded"
                type="text"
                placeholder='Enter Password'
            />
        </div>
    )
}

export default FormBetter


//?3 APPROCH FOR INPUT HANDLING

//?2-Better

//- so in better approch we dont use the  state for every input we use state default is object(where input is key value pair) and
//-while we call set function we destructor a new object with old value and for that input value from the e.target.value
// const [formData, setFormData] = useState({})
// - you can give empty object because you do spread{...formData} everytime so it will work

//?CODE
// onChange = {(e) => setFormData({ ...formData, email: e.target.value })}
//?Explain
//setFormData({}) => new Object
//setFormData({...formData}) => new Object -> now destructure value from new object
//setFormData({...formData,email:e.target.value}) => new Object -> now destructure value from new object -> put our new value

//- Here also you repet yourself ---> setFormData() we repeat and everytime we remeber key and write so it not optimal

