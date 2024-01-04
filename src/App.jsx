import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Content from './components/Content'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/contact';
import './App.css'


//import pages

function App() {


  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
   

    </>
  )
}

export default App
