const { Schema } = require('mongoose')

const Receipt = new Schema(
  {
    items: [{ type: Schema.Types.ObjectId, ref: 'Item', required: true }],
    totalCost: { type: Number, required: true },
    date: { type: String, required: true },
    paid: { type: Boolean, required: false },
    truck: { type: Schema.Types.ObjectId, ref: 'FoodTruck', required: true }
  },
  { timestamps: true }
)

module.exports = Receipt
