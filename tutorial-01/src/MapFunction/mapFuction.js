import React from 'react'

const MapFunction  = () => {
    let studentName = ["Sandun", "Kapila", "Dharshna", "Pubudu"];
    return (
      <div>
        <p style={{fontWeight:'bold'}}>Map an Array using map()</p>
        {studentName.map((name, index) => (
          <p key={index}>{name}</p>
        ))}
      </div>
    );
  };

export default MapFunction 