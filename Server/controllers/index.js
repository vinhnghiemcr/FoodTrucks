const getFoodTrucks = (req, res) => {
  try {
    const truck = await FoodTruck.find()
    return res.status(201).send(truck)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getFoodTruckById = (req, res) => {
  try {
    const truck = await FoodTruck.findById(req.params.id)
    return res.status(201).send(truck)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReceipt = (req, res) => {
  try {
    const receipt = await new Receipt(req.body)
    await receipt.save()
    return res.status(201).json({ receipt })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getReceipts = (req, res) => {
  try {
    const receipt = await Receipt.find()
    return res.status(201).send(receipt)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReceiptById = (req, res) => {
  try {
    const receipt = await Receipt.findById(req.params.id)
    return res.status(201).send(receipt)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getFoodTrucks,
  getFoodTruckById,
  createReceipt,
  getReceipts,
  getReceiptById
}
