const { Schema } = require('mongoose')

const Menu = new Schema(
    {
        name: {type: String, required: true},
        items: { type: [Schema.Types.ObjectId], required: true},
        truck: { type: Schema.Types.ObjectId}
    },
    { timestamps: true}
)

module.exports = Menu