import { createContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import React, { useState } from "react";
import Learn from "./components/Learn";
import Example from "./example";
import Myusestate from "./components/Myusestate";
import { Link } from "react-router-dom";
import Home from "./Home";
import './index.css'
export const DataContext = createContext()

export const Contexts = createContext();

function App() {
  
  const [darktheme, setdarktheme] = useState(true)
  const [Name, setName] = useState("kamana");
  const [number, setNumber] = useState(0);

  return (
   
    <DataContext.Provider value={[darktheme, setdarktheme]}>

      <Router>

       <div style={{backgroundColor: "green",
       height: "60px",
       padding:"60px",
       alignItems:"center"

      }}>

       <center>
          <Link className="link" to="/" style={{color: "white", fontSize:"19px" }}>HOME</Link>
           &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;   
          <Link className="link" to="/Example"  style={{color: "white", fontSize:"19px" }}>INFO</Link>
          &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
          <Link className="link" to="/Learn" style={{color: "white", fontSize:"19px" }}>USE INFFECT HOOKS</Link>
          &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;  &nbsp;
          <Link className="link" to="/Myusestate" style={{color: "white", fontSize:"19px" }}>USE STATE HOOKS</Link>

          </center>
          
       </div>
        <Routes>
    
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<h1 style={{textAlign:"center" , paddingTop:"50px" , fontSize:"30px"}}>oops! page not found</h1>}/>
          <Route path="/Example" element={<Example />} />
          <Route path="/Learn" element={
            <Contexts.Provider value={Name} >
          <Learn />
          </Contexts.Provider>
          } />
          <Route path="/Myusestate" element={<Myusestate/>} />
        
        </Routes>
      </Router>
      <footer  style={{backgroundColor: "green",
       height: "60px",
       padding:"60px",
       alignItems:"center"

      }} >
        <h1>NKURUNZIZA eric</h1>
        <h1> class l5 sod</h1>
      <p>  coppy light 2024!  coppy light 2024!</p>
      </footer >
          </DataContext.Provider>
  );
}

export default App;
