
import { useState } from 'react'

import { BrowserRouter , Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContainerComponent from "./mainPage/container.jsx";
import Contents from "./AboutUs/Contents/Contents.jsx";
import HeaderComponent from  "./mainPage/Header/header";
import Footer from  "./mainPage/FFooter";
import TopBar from "./mainPage/Top-header.jsx";
import Services from "./islam/containers/Services.jsx";
import ProductList from "./islam/containers/ProductList.jsx";

function App() {
   return (
    <div>
      <TopBar/>
       <HeaderComponent/>
      <Routes>
        
       <Route path="/" element={<ContainerComponent/>} />  
       <Route path="/Contents" element={<Contents/>} /> 
        {/* <Route path="/ContactPage" element={<ContactPage/>} />   */}
       <Route path="/Services" element={<Services />} /> 
      <Route path="/ProductList" element={ <div>  <ProductList />  </div>  } />

       

        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
        <Footer/>
    </div>
  );
}


export default App;




