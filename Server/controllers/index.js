const { FoodTruck, Receipt, Item, Menu, Review } = require('../models/index')

const getFoodTrucks = async (req, res) => {
  try {
    const truck = await FoodTruck.find()
    return res.status(201).send(truck)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getFoodTruckById = async (req, res) => {
  try {
    let truck = await FoodTruck.findById(req.params.ftid)
    return res.status(201).send(truck)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReceipt = async (req, res) => {
  try {
    const receipt = await new Receipt(req.body)
    await receipt.save()
    return res.status(201).json({ receipt })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getReceipts = async (req, res) => {
  try {
    const receipt = await Receipt.find()
    return res.status(201).send(receipt)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReceiptById = async (req, res) => {
  try {
    const receipt = await Receipt.findById(req.params.id)
    return res.status(201).send(receipt)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getItem = async (req, res) => {
  try {
    const items = await Item.find()
    return res.status(201).send(items)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    const truckId = req.body.truck
    const truck = await FoodTruck.findById(truckId)
    console.log(truck.rating, " truck rating")
    const reviews = truck.reviews
    console.log(reviews, " Reviews");
    
    let total = 0
    reviews.forEach((review) => {total += valueOf(review.rating); console.log(typeof (review.rating), " total")})
    let rating = total / reviews.length
    console.log(rating , " rating");
    
    await FoodTruck.findByIdAndUpdate(truckId, {reviews: [...truck.reviews, review._id] })
    return res.status(201).json(review)
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getFoodTrucks,
  getFoodTruckById,
  createReceipt,
  getReceipts,
  getReceiptById,
  getItem,
  createReview
}
