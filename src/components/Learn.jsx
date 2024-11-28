import React, { useEffect, useState } from 'react'
import { Contexts }from '../App'
import { useContext } from "react"
const Learn = () => {
  const number = useContext(Contexts)
    const [count,setCount] = useState(0)
  const HandleChange =()=>{
    setCount(count + 1)
  }
  const HandleChange1 =()=>{
    setCount(count + 1)
  }
  useEffect(()=>{
    document.title = `title is ${count} `
    console.log("component is updared:", {count})
  },[count])
  return (
    <div>
      <h1>use effect page</h1>
      <p style={{backgroundColor:"green",height:"30px",color:"white",fontSize:"20px"}}>this use effect it provide side effect ic title bar and in  the console</p>
        <h2>{count} the number is incremented</h2>
        <button onClick={HandleChange}>increment</button>
        <button onClick={HandleChange1}>decrement</button>
        <h1>my name is:{number}</h1>
    </div>
  )
}

export default Learn