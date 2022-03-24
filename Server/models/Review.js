const { Schema } = require('mongoose')

const Review = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true},
    date: { type: Date, required: true },
    truck: { type: Schema.Types.ObjectId, ref: 'FoodTruck', required: true }
  },
  { timestamps: true }
)

module.exports = Review 