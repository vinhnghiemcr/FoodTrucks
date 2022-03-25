import { Routes, Route } from 'react-router-dom'
import './style/App.css'
import Nav from './components/Nav'
import About from './pages/AboutPage'
import TruckPage from './pages/TruckPage'
import HomePage from './pages/HomePage'
import React from 'react'
import Truck from './components/Truck'

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/food-truck/:ftid" element={<Truck />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
