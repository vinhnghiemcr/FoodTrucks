const { FoodTruck, Receipt, Item, Menu } = require('../models/index')

const getFoodTrucks = async (req, res) => {
  try {
    const truck = await FoodTruck.find()
    return res.status(201).send(truck)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}



const getFoodTruckById = async (req, res) => {
  try {
    let data = {}
    let truck = await FoodTruck.findById(req.params.id)
    console.log(truck, "first truck")
    // console.log(truck.menu._id.toString(), "menu id")
    let menu = await Menu.findById(truck.menu)
    console.log(menu, " first menu")
    
    //[id] -> [json]
    let items = []
   menu.items.forEach( async function(item) {
    let newItem =  await Item.findById(item)
    await items.push({newItem})
    // data = {items: [{ }]}
    // console.log({newItem}, " itemmmmmmmmmmmmmm") 
  })
    // let items = await getItems(menu.items)

    // console.log(items, " first items")
    // menu = {...menu, "items" : [...items]}
    // truck = {...truck, "menu": {...menu}}
    return res.status(201).send(items)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
//623ca6e0cf038b9d83833ece
const getItems = (array) => {
   return array.map(async (item) => {
      await Item.findById(item._id.toString())
    })
}
 
const createReceipt = async (req, res) => {
  try {
    console.log(req.body)
    const receipt = await new Receipt(req.body)
    await receipt.save()
    return res.status(201).json({ receipt })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getReceipts = async (req, res) => {
  try {
    const receipt = await Receipt.find()
    return res.status(201).send(receipt)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getReceiptById = async (req, res) => {
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
