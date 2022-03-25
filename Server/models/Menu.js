const { Schema } = require('mongoose')

const Menu = new Schema(
  {
    name: { type: String, required: false },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item', required: true }]
  },
  { timestamps: true }
)

module.exports = Menu
