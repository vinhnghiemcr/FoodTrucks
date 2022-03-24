const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/food-trucks', controllers.getFoodTrucks)

router.get('/food-trucks/:id', controllers.getFoodTruckById)

router.post('/receipt/:ftid', controllers.createReceipt)

router.get('/receipt/:ftid', controllers.getReceipts)

router.get('/receipts/:rId', controllers.getReceiptById)

module.exports = router

// {
//     "_id": "83496619846874017",
//     "name": "Express Food Truck",
//     "menu": {
//         "name": "drinks",
//         "items": [
//         {
//             "name": "Water",
//             "price": 3
//         },
//         {
//             "name" : "Coke",
//             "price": 5
//         }
//     ]}
//     "location": "somewhere"
//     "rating": 5
//     "reviews": ["I love Pho", "Pho loves me"]
// }
