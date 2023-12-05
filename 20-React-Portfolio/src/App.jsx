import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './components/About'
import Work from './components/Work'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'


export default function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Work/>}/>
          <Route path="/portfolio" element={<Work/>}/>
          <Route path="/*" element={<About/>}/> 
        </Routes>
      </BrowserRouter>


      <Footer />
    </>
  )
}


