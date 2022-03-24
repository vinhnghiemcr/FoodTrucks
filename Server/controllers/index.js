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
    const truck = await FoodTruck.findById()
    return res.status(201).send(truck)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const saveReceipt = (req, res) => {
  try {
    const receipt = await new Receipt()
    await receipt.save()
    return res.status(201).json({ receipt })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  getFoodTrucks,
  getFoodTruckById,
  saveReceipt
}
