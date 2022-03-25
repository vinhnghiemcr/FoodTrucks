import React from 'react'
import { useState } from 'react'

const Review = () => {

  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(5)

  return (
    <div>
      <h1>Leave Us A Review!</h1>
      <form>
        <input type="text" placeholder='Name'/>
        <input type="number" min="0" max="5" placeholder="Rate us out of 5"></input>
        <input type="text" placeholder='Leave us a comment'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Review