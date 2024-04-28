import React from 'react'

const destructingArrays = () => {
    const studentData = ["Sandun", "RUSL", 25, "Galgamuwa"];

    const [name,, age,,] = studentData;
  return (
    <div>
        <p style={{fontWeight:'bold'}}>Destructing Arrays</p>
        <p>[ {studentData.toString()} ]</p>
        <p>Student Name is {name}</p>
        <p>He is {age} years old</p>

    </div>
  )
}

export default destructingArrays