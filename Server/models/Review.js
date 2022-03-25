const { Schema } = require('mongoose')

const Review = new Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
    rating: { type: Number, min: 0, max: 5, required: true },
    date: { type: Date, required: false },
    truck: { type: Schema.Types.ObjectId, ref: 'FoodTruck', required: true }
  },
  { timestamps: true }
)

module.exports = Review
