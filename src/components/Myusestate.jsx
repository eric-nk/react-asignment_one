import React from 'react'
import { useState } from 'react'
function Myusestate() {
  const[num,setnum]=useState(0)
  const[color,setcolor]=useState("blue")
  
  return (
    <div>
      
        <h1>REACT USESTATE HOOKS</h1>
        <h1>use state page</h1>
         <p>click to the button to change the number</p>
         <button onClick={()=>setnum(num+1)}style={{backgroundColor:color}}>increment number</button>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button onClick={()=>setnum(num-1)}style={{backgroundColor:color}}>decrement number</button>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <button  onClick={()=>setcolor(color==='blue'?'green':'blue')}>change color</button>

         <p style={{color:color?'brown':'red'}}>our changed number is  {num}</p>
      
        
    </div>
  )
}

export default Myusestate