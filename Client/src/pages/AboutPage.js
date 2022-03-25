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
      <h2 className="inst">About Us</h2>
      <ul>
        <li>
          Created by a team of food truck enthused General Assembly students in
          a day and a half.
        </li>
        <li>
          By:
          <a href="https://www.linkedin.com/in/canh-vo-056122188/">Canh Vo</a>
          <a href="https://www.linkedin.com/in/nghiem-v-truong/">
            Nghiem Truong
          </a>
          <a href="https://www.linkedin.com/in/chinwenduukoha/">
            Chinwendu Ukoha
          </a>
          <a href="https://github.com/vinhnghiemcr/FoodTrucks">
            Molly Obermeier
          </a>
        </li>
        <li>
          Repository:
          <a href="https://github.com/vinhnghiemcr/FoodTrucks">Food Truck</a>
        </li>
      </ul>
    </div>
  )
}

export default About
