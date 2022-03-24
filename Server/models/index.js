const mongoose = require('mongoose')
const ItemSchema = require('./Item')
const MenuSchema = require('./Menu')
const ReviewSchema = require('./Review')
const ReceiptSchema = require('./Receipt')
const FoodTruckSchema = require('./FoodTruck')

const Item = mongoose.model('items', ItemSchema)
const Menu = mongoose.model('menus', MenuSchema)
const Review = mongoose.model('menus', ReviewSchema)
const Receipt = mongoose.model('receipts', ReceiptSchema)
const FoodTruck = mongoose.model('foodTrucks', FoodTruckSchema)

module.exports = {
    Item,
    Menu,
    Review,
    Receipt,
    FoodTruck
}