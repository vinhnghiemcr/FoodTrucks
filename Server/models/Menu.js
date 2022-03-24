const { Schema } = require('mongoose')

const Menu = new Schema(
    {
        name: {type: String, required: true},
        items: [{ type: Schema.Types.ObjectId,  ref: 'Item', required: true}] ,
        truck: { type: Schema.Types.ObjectId, ref: 'FoodTruck', required: true }
    },
    { timestamps: true}
)

module.exports = Menu