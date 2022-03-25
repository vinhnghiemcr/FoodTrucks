import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import About from './pages/AboutPage'
import HomePage from './pages/HomePage'
import TruckPage from './pages/TruckPage'
import React from 'react'
import './style/App.css'

const App = () => {
  return (
    <div className="bodyApp">
      <Nav />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/food-trucks/:ftid" element={<TruckPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
