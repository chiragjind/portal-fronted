import React, { useContext, useState } from "react";

import './App.css';
import { Login } from "./Login";
import { Register } from "./Register";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import{ Routes,Route } from "react-router-dom"
import About from "./components/About";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Todo from "./Todo";
import Search from "./Serach";

function App() {
  

  return (
    <>
   
     <Navbar title="chirag_jindal11" aboutus="About us"/>
      
    <Routes>
      <Route path='/' element={<Register/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Register' element={<Register/>} />
      <Route path='/Home' element={<Home />} />
      <Route path='/About' element={<About />} />
      <Route path='/Project2' element={<Project2 />} />
      <Route path='/Project3' element={<Project3 />} />
      <Route path='/Todo' element={<Todo />} />
      <Route path='/Search' element={<Search />} />

      

      

    </Routes>
  
    </>
  );
}

export default App;