import React, { useState } from "react";

export const Counter = () => {
  const [num, setNum] = useState(0);
  const [count, setCount] = useState(0);
  const[data,setData]=useState([])

  const setDta=()=>{
setData(num*count)
  }
  const setta=()=>{
    setData(num/count)
  }
  return (
    <div>
      <input type="number" onChange={(e) => setNum(e.target.value)} />
      <input type="number" onChange={(e) => setCount(e.target.value)} />
       <hr />
      <button onClick={setDta}>Multiply</button>
      <button onClick={setta}>devided</button>
      <h1>Counting: {data}</h1>
    </div>
  );
};
