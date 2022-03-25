import { Routes, Route } from 'react-router-dom'
import './style/App.css'
import Nav from './components/Nav'
import About from './pages/AboutPage'

import HomePage from './pages/HomePage'
import React from 'react'
import Truck from './components/Truck'

const App = () => {
  return (
    <div className="bodyApp">
      <Nav />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/food-trucks/:ftid" element={<Truck />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
