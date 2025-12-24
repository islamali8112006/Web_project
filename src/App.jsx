import { useState } from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContainerComponent from "./components/container.jsx";
import Contents from "./AboutUs/Contents/Contents.jsx";
import HeaderComponent from  "./components/Header/header";
import TopBar from "./components/Top-header.jsx";
function App() {
   return (
    <div>
      <TopBar/>
       <HeaderComponent/>
      <Routes>
        
       <Route path="/" element={<ContainerComponent/>} />  
       <Route path="/Contents" element={<Contents/>} />  
       {/* <Route path="/Services" element={<Services />} /> 
      <Route path="/products" element={ <div>  <ProductList />  </div>  } /> */}

       
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App
