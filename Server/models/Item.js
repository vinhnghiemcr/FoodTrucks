const { Schema } = require('mongoose')

const Item = new Schema(
    {
        name: { type: String, required: true},
        description : { type: String, required: false},
        image: { type: String, required: false},
        price: { type: Number, required: true}
    },
    {timestamps: true}
)

module.exports = Item
