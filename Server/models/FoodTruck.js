const { Schema } = require('mongoose')

const FoodTruck = new Schema(
    {
        name: {type: String, required: true},
        menu: { type: Schema.Types.ObjectId,  ref: 'Menu', required: true},
        location: {type: String, required: true},
        image: { type: String, required: true},
        rating: { type: Number, required: true},
        reviews: [ { type: Schema.Types.ObjectId, ref: 'Review', required: false} ],
        openHours: { type: String, required: true},
        receipts: [{ type: Schema.Types.ObjectId, ref: 'Receipt', required: false }]
    },
    { timestamps: true }
)

module.exports = FoodTruck