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

module.exports = {
  getFoodTrucks,
  getFoodTruckById
}
