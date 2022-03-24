import { Routes, Route } from 'react-router-dom'
import './style/App.css'
import Nav from './components/Nav'
import About from './pages/AboutPage'
// import TruckPage from './pages/TruckPage'
// import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
      <Nav />
      <main>
        <Routes>
          {/* <Route index element={<HomePage />} /> */}
          <Route path="/about" element={<About />} />
          {/* <Route path="/food-truck" element={<TruckPage />} /> */}
        </Routes>
      </main>
    </div>
  )
}

export default App
