import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Navbar from './Component/Navbar'

import { LogIn, Router } from 'lucide-react';
import Home from './Component/home';
import Author from './Component/author';
import { About } from './Component/about';
import { Genurs } from './Component/genurs';
import Product from './Component/product';


export default function App() {
  return (
   
    <div>
     <BrowserRouter>
     <Navbar/> 
     <Routes>
      
      <Route path='/home'element={<Home/>}></Route>
      <Route path='/author'element={<Author/>}></Route>
      <Route path='/genurs'element={<Genurs/>}></Route>
      <Route path='/about' element={<About/>}></Route>
     </Routes>
     </BrowserRouter>
     
     <Product/>
     
    </div>
    
  )
}





