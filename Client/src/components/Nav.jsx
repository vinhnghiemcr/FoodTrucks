import { Link } from 'react-router-dom'
import React from 'react'

const Nav = () => {

  return (
    <header>
      <nav>
        <div className='homeNav'>
          <Link to='/'>Home</Link>
        </div>
        <div className='aboutNav'>
          <Link to='./about'>About</Link>
        </div>
      </nav>
    </header>
  )
}

export default Nav