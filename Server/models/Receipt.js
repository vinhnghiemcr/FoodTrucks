const { Schema } = require('mongoose')

const Product = new Schema(
  {
    items: [{ type: Schema.Types.ObjectId,  ref: 'Item', required: true}],
    totalCost: { type: Number, required: true },
    date: { type: Date, required: true },
    paid: { type: Boolean, required: true},
    truck: { type: Schema.Types.ObjectId, ref: 'FoodTruck', required: true }
  },
  { timestamps: true }
)

module.exports = Product