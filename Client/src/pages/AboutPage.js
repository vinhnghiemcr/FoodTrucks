import React from 'react'
import '../style/App.css'

const About = () => {
  return (
    <div className="aboutPage">
      <h1>Food Trucks </h1>
      <h3>
        Looking for something good to eat? Head to the map and click on a food
        truck!
      </h3>
      <h2 className="inst">Instructions</h2>
      <ul>
        <li>Click on a food truck</li>
        <li>Select a menu item and add it to your cart</li>
        <li>Checkout and recieve a recipt</li>
        <li>Leave a review if you want!</li>
      </ul>
    </div>
  )
}

export default About
