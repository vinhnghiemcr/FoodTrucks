const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/food-trucks', controllers.getFoodTrucks)

router.get('/food-trucks/:id', controllers.getFoodTruckById)

router.post('/receipt/:ftid', controllers.createReceipt)

router.get('/receipt/:ftid', controllers.getReceipts)

router.get('/receipts/:rId', controllers.getReceiptById)

router.get('/items', controllers.getFoodItems)

router.get('/menu', controllers.getMenu)

module.exports = router
