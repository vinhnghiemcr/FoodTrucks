import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import ReactStars from 'react-stars'
import { useLocation } from 'react-router-dom'

const Review = ({ truckId }) => {
  const location = useLocation()
  let navigate = useNavigate()

  const [name, setName] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(5)

  const saveName = (e) => {
    setName(e.target.value)
  }

  const saveComment = (e) => {
    setComment(e.target.value)
  }

  const saveRating = (e) => {
    setRating(e)
  }

  const postRequest = () => {
    const data = {
      name: name,
      comment: comment,
      rating: rating,
      truck: truckId
    }
    console.log(data)
    const saveReview = async () => {
      await axios.post(`http://localhost:3001/api/review`, data).then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    saveReview()
    navigate(location.pathname)
  }

  return (
    <div>
      <h1>Leave Us A Review!</h1>
      <form onSubmit={postRequest}>
        <input type="text" placeholder='Name' value={name} onChange={saveName} />
        {/* <input type="number" min="0" max="5" placeholder="Rate us out of 5" value={rating} onChange={saveRating}></input> */}
        <ReactStars  count={5}  value={rating}  onChange={saveRating} size={24} color2={'#ffd700'} />
        {/* <input type="text" placeholder='Leave us a comment' value={comment} onChange={saveComment}/> */}
        <textarea name="Text1" type="text" cols="40" placeholder='Leave us a comment' rows="5" value={comment} onChange={saveComment}></textarea>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Review