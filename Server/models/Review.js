const { Schema } = require('mongoose')

const Review = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    brand: { type: Schema.Types.ObjectId, ref: 'brands' }
  },
  { timestamps: true }
)

module.exports = Review 