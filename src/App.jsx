import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContainerComponent from "./components/container.jsx";
function App() {
   return (
    <div>
      <Routes>
        
       <Route path="/" element={<ContainerComponent/>} />  

       {/* <Route path="/Services" element={<Services />} /> 
      <Route path="/products" element={ <div>  <ProductList />  </div>  } /> */}

       
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}
export default App
