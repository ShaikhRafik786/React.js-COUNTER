import React, { useState, useEffect } from "react";

export const Counter = () => {
  const [data, setData] = useState(0);

  const handle = () => {
    setTimeout(()=>{
        setData(data+1)
    }, 5000);
  }
  return (
    <div style={{ backgroundColor: "purple" }}>
      <h1>{data}</h1>
      <button onClick={() => (data < 100 ? setData(data + 5) : null)}>
        Increment
      </button>
      <button
        onClick={() =>
          data > 5 ? setData(data - 5) : alert("your limit End bro button is rest now")
        }
      >
        Decrement
      </button>
      <button onClick={handle}>handle</button>
      <button onClick={()=> setData(0)} >RESET</button>
    </div>
  );
};

