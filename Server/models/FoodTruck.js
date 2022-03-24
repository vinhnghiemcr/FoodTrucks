const { Schema } = require('mongoose')

const FoodTruck = new Schema(
    {
        name: {type: String, required: true},
        menu: { type: Schema.Types.ObjectId,  ref: 'Menu', required: true},
        location: {type: String, required: true},
        image: { type: String, required: true},
        rating: { type: Number, required: true},
        reviews: [ { type: Schema.Types.ObjectId, ref: 'Review', required: true} ],
        openHours: { type: String, required: true},
        reciept: [{ type: Schema.Types.ObjectId, ref: 'Receipt', required: true }]
    },
    { timestamps: true }
)

module.exports = FoodTruck