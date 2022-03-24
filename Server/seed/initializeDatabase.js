const db = require('../db')
const { Item, Menu, FoodTruck } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const item1 = await new Item({
      name: 'Apple',
      price: 3
    })
    await item1.save()

    const item2 = await new Item({
        name: 'Banana',
        price: 3
      })
      item2.save()

      const item3 = await new Item({
        name: 'Water',
        price: 5
      })
    await item3.save()

    const menu1 = await new Menu({
        name: 'First Menu',
        items: [item1._id, item2._id, item3._id]
    })
    await menu1.save()

    const foodTruck1 = await new FoodTruck({
        name: 'Express Kitchen',
        menu: menu1._id,
        location: 'Northwest of the park',
        image: 'https://media1.sacurrent.com/sacurrent/imager/u/original/25026533/ron_bechtol.jpg',
        rating: 5,
        openHours: '10am-6pm'
    })
    await foodTruck1.save()

    // const review1 = await new Review({
    //     name: 'Nghiem Truong',
    //     description: 'I love food truck',
    //     rating: 5,
    //     date: new Date(),

    // })

    // await Product.insertMany(products)
    console.log('Created products!')
  }
  
  const run = async () => {
    await main()
    db.close()
  }
  
  run()