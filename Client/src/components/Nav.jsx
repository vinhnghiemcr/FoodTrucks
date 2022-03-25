import { Link } from 'react-router-dom'
import React from 'react'
import '../style/App.css'

const Nav = () => {

  return (
    <header>
      <nav>
        <div>
          <h1>Food Truck Palooza</h1>
        </div>
        <div className='homeNav'>
          <Link to='/'>Home</Link>
          <Link to='./about'>About</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav