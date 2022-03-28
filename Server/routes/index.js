const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/food-trucks', controllers.getFoodTrucks)

router.get('/food-trucks/:ftid', controllers.getFoodTruckById)

router.get('/menu/:id', controllers.getMenuById)

router.get('/menu/:id/items', controllers.getItemsByMenuId)

router.post('/receipt', controllers.createReceipt)

router.get('/receipt/:ftid', controllers.getReceipts)

router.get('/receipts/:rId', controllers.getReceiptById)

router.get('/item/:id', controllers.getItemById)

router.post('/review', controllers.createReview)

module.exports = router
