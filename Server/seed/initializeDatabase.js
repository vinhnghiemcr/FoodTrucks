const db = require('../db')
const { Item, Menu, FoodTruck } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const item1 = await new Item({
    image:
      'https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/277305840_531027315303300_7860654919741446548_n.png?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=qpXTFo43bRwAX-Jbxvr&_nc_ht=scontent-iad3-1.xx&oh=00_AT_jCNcVTZhgAbf0JlenuMmeYxA0Xdg6U0uXv7Vj5CTFMA&oe=6243B76E',
    name: 'Jollof Rice Tacos',
    description:
      'Jollof rice Tacos is a spicy rice and chicken dish steamed in a deep fried tomato sauce marinade, seasoned to perfection and garnished with vegetables and onions',
    price: 10
  })
  await item1.save()

  const item2 = await new Item({
    image:
      'https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/277246911_531029735303058_1499762793053161587_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=T5ZMG2KLvYQAX8xyMWw&_nc_ht=scontent-iad3-1.xx&oh=00_AT9biGyQKEWw1XfTW0hW4RweOeodiE1r0Uhoeup37tm_SA&oe=6241F6FD',
    name: 'Beef Suya Tacos',
    description:
      'Delicious goodness in the form of suya tacos with authentic northern Nigerian yaji flovors.',
    price: 12
  })
  item2.save()

  const item3 = await new Item({
    image:
      'https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/277438699_531031841969514_4866046867769629789_n.png?stp=dst-png_p526x296&_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=pNF9539bRysAX8DRPNH&_nc_ht=scontent-iad3-1.xx&oh=00_AT-xh0EKqviifyHHP_gm367EbcR-u1Zsf2IgrZTSO9VF1w&oe=6243A362',
    name: 'Black Bean Tacos',
    description:
      'This our vegan special is a real mouth-waterer. A healthy take on taco night, they are vegan and vegetarian, and are gloriously gluten-free',
    price: 10
  })
  await item3.save()

  const item4 = await new Item({
    image:
      'https://static.wixstatic.com/media/ebc9b2_ae18f7c8007845db96c822822686d8a1~mv2.jpeg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_ae18f7c8007845db96c822822686d8a1~mv2.webp',
    name: 'Jollof Rice Mix',
    description:
      'The jollof mix could be added to soups like efo-riro and okra soup to levate the taste, be used to prepare stews, or most importantly, be used in making your very own jollof rice',
    price: 15
  })
  await item4.save()

  const item5 = await new Item({
    image:
      'https://static.wixstatic.com/media/ebc9b2_26a8b55115734b12aa4c21714839cde7~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_26a8b55115734b12aa4c21714839cde7~mv2.webp',
    name: 'Zobo',
    description:
      'Zobo is a popular drink in Nigeria made from hibiscus flower and ginger. It is filled with antioxidant properties and is the perfect drink for every occasion.',
    price: 5
  })
  await item5.save()

  const item6 = await new Item({
    image:
      'http://1.bp.blogspot.com/-S4_65zi3VZw/VKfbeLnEtoI/AAAAAAAAHHw/7mNpV6m0w3Y/s1600/Chapman%2BDrink.JPG',
    name: 'Chapman',
    description:
      'Chapman is a popular drink in Nigeria invented in the very heart of lagos. It is packed with fizz, with orange and lime flavors, and is the perfect mocktail!',
    price: 5
  })
  await item6.save()

  const menu1 = await new Menu({
    name: 'First Menu',
    items: [item1._id, item2._id, item3._id, item4._id, item5._id, item6._id]
  })
  await menu1.save()

  const foodTruck1 = await new FoodTruck({
    name: 'Express Kitchen',
    menu: menu1._id,
    location: 'Northwest of the park',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.giphy.com%2Fmedia%2Fd31vot4Yoy9r8dwY%2Fgiphy.gif&f=1&nofb=1',
    rating: 5,
    openHours: '10am-6pm'
  })
  await foodTruck1.save()

  // FoodTruck 2 starts here

  const item7 = await new Item({
    image:
      'https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/277352358_531050908634274_243381163224788519_n.png?stp=dst-png_p526x296&_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=RVVLj6DbBFkAX9cbK6A&_nc_ht=scontent-iad3-1.xx&oh=00_AT_tIlt4W7ziflk8cLiR6oyLkLZtqa74oZKVzp5QAVWChw&oe=6242BAF4',
    name: 'Rice and Beef Stew',
    description:
      'Beef flavored steamed rice in vegetables with beef tomato stew',
    price: 15
  })
  await item7.save()

  const item8 = await new Item({
    image:
      'https://scontent-iad3-1.xx.fbcdn.net/v/t39.30808-6/277441306_531054361967262_5924000899495113833_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_ohc=tUl23AWEwHsAX_6X0lC&_nc_ht=scontent-iad3-1.xx&oh=00_AT-uGYIzZ2Z3ZQHFmHPW_t76WUB-FPAWkA6B_anBSVqTOQ&oe=62435143',
    name: 'Peppered Chicken',
    description:
      'Juicy fall-off-the-bone chicken, dipped in a deliciously seasoned onion sauce, tenderly grilled and cooked in the original Wendylicious sauce',
    price: 15
  })
  item8.save()

  const item9 = await new Item({
    image:
      'https://static.wixstatic.com/media/ebc9b2_98e911ef8f4b433386c3b5eb36e7936d~mv2.jpeg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_98e911ef8f4b433386c3b5eb36e7936d~mv2.webp',
    name: 'Peppered Turkey',
    description:
      'Turkey thighs or wings cooked in flavorful broth, roasted and sauteed in Wendylicious Peppered Sauce',
    price: 15
  })
  await item9.save()

  const item10 = await new Item({
    image:
      'https://static.wixstatic.com/media/ebc9b2_ae18f7c8007845db96c822822686d8a1~mv2.jpeg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_ae18f7c8007845db96c822822686d8a1~mv2.webp',
    name: 'Jollof Rice Mix',
    description:
      'The jollof mix could be added to soups like efo-riro and okra soup to levate the taste, be used to prepare stews, or most importantly, be used in making your very own jollof rice',
    price: 15
  })
  await item10.save()

  const item11 = await new Item({
    image:
      'https://static.wixstatic.com/media/ebc9b2_fbbebdd8853c4d7fbc87ef289c89a60e~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_fbbebdd8853c4d7fbc87ef289c89a60e~mv2.webp',
    name: 'Puff-Puff',
    description:
      'French Beignet balls. The Red velvet Puff-Puff and the "Green Goblin"(comic nerd here) puff-puffs. The red velvet contains cocoa powder and the green goblin is infused with white chocolate',
    price: 5
  })
  await item11.save()

  const item12 = await new Item({
    image:
      'https://static.wixstatic.com/media/ebc9b2_5c676a8dad224043a3a0f91bcf063bee~mv2.jpeg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_5c676a8dad224043a3a0f91bcf063bee~mv2.webp',
    name: 'Wendylicious Spicy Sauce',
    description:
      '1. Can`t handle spicy: Which like the name, is for people that cannot handle spicy foods at all.  2. Mayba a little spicy: You still can`t handle spicy food as well, but you are better than most people. 3. Give me Spicy: You can sit at a table with Nigerians eating Nigerian food, and hold your own. 4. Dragon Breath: IF YOU KNOW YOU KNOW!',
    price: 12
  })
  await item12.save()

  const menu2 = await new Menu({
    name: 'First Menu',
    items: [item7._id, item8._id, item9._id, item10._id, item11._id, item12._id]
  })
  await menu2.save()

  const foodTruck2 = await new FoodTruck({
    name: 'Express Kitchen',
    menu: menu2._id,
    location: 'North of the park',
    image: 'https://media0.giphy.com/media/feiLHLNf3X2zTHNJwS/giphy.gif',
    rating: 5,
    openHours: '10am-6pm'
  })
  await foodTruck2.save()

  // Food Truck 3 starts here

  const item13 = await new Item({
    image:
      'https://cdn.shopify.com/s/files/1/0539/1892/4992/products/3D_BANANA_PROFILE_HIRES_3000x3000_46ac8f96-1911-4efe-af35-363c839b2301_370x.png?v=1615312912',
    name: 'Slap Yo` Momma Banana Pudding',
    description:
      'They say Momma knows best. With unreasonably creamy banana pudding, true banana puree, and homemade vanilla shortbread cookies mixed into our banana ice cream, every momma will wish this were hers. Because after one taste it will knock someone off their feet. So do what we do here down South and get one for you, and one for yo` momma. That way, no one will have anyone left asking',
    price: 8
  })
  await item13.save()

  const item14 = await new Item({
    image:
      'https://cdn.shopify.com/s/files/1/0539/1892/4992/products/3D_PECAN_PROFILE_HIRES_3000x3000_c3cbc8a6-abf5-4e05-961a-76e33643c497_1024x1024@2x.png?v=1615312933',
    name: 'Thick As Thieves Pecan Pie',
    description:
      'You`re gonna think we stole something. Our gooey, thick, absolutely sticky pecan pie is not to be taken lightly. With a buttery crust, caramel, and crystally brown sugar, you`ll be pondering how we were able to crumble it, crush it, and mix it right into our pecan ice cream. But don`t think too long; this sweet Southern cement has a thing for disappearing into the night.',
    price: 8
  })
  item14.save()

  const item15 = await new Item({
    image:
      'https://cdn.shopify.com/s/files/1/0539/1892/4992/products/3D_REDVEL_PROFILE_HIRES_3000x3000_8fe390de-811a-4966-a27e-8d276fe5dbf6_1024x1024@2x.png?v=1615312895',
    name: 'Right As Rain Red Velvet Cheesecake',
    description:
      'This here`s a taste that`s too right to ever be wrong. It begins with our creamy swirls of red velvet cheesecake. Then we made it even more right by smashing it into our cocoa ice cream to create ever-present moments of bliss that shalt not be missed. So let the rain fall. For after one bite everything will be more than alright',
    price: 8
  })
  await item15.save()

  const item16 = await new Item({
    image:
      'https://cdn.shopify.com/s/files/1/0539/1892/4992/products/3D_SWEETPOT_PROFILE_HIRES_3000x3000_c10dbcf2-ae19-4cee-8009-b5978a89687b_1024x1024@2x.png?v=1615312862',
    name: 'Grandma Gigi Sweet Potato Pie',
    description:
      'Anything this good had to have come from Grandma Gigi. That`s because every scoop is brimming with a taste inspired by her homemade sweet potato pie—oh-so-fluffy sweet potatoes, real butter, flaky crust, and a touch of cinnamon & brown sugar mixed together to give you a Southern-style hug that you`ll want to hug right back. So prepare yourself. For this slice of down-home heaven is now served with a chill.',
    price: 8
  })
  await item16.save()

  const item17 = await new Item({
    image:
      'https://cdn.shopify.com/s/files/1/0539/1892/4992/products/3D_BOURBON_PROFILE_HIRES_3000x3000_68859781-b8a3-4453-b1c3-56b662397e64_1024x1024@2x.png?v=1615312947',
    name: 'Uncle Charles Brown Suga Bourbon Cake',
    description:
      'Unc is as smooth as they come; only his stash of bourbon was smoother. When your tongue dances upon our signature bourbon ice cream that`s paired with his secret recipe bourbon cake pieces—and all of the oaky, smoky, bourbon goodness— the caramelized brown sugar finish might take you over the top, all the way down to Georgia proper. Exactly where Uncle Charles would expect you to be.',
    price: 8
  })
  await item17.save()

  const item18 = await new Item({
    image:
      'https://cdn.shopify.com/s/files/1/0539/1892/4992/products/3D_CARAMEL_PROFILE_HIRES_3000x3000_f3ed2729-83db-456a-acdb-ed3c3131bef5_1024x1024@2x.png?v=1615312847',
    name: 'Aunt Poonie`s Caramel Pound Cake',
    description:
      'Most people don`t use a skillet to make a pound cake. But most people aren`t Aunt Poonie. Slow-baked with buttery caramel drizzled right in, our favorite aunt`s favorite dessert has been politely mashed into our caramel ice cream for a sweet Southern melody that will slow dance into your heart and leave you clanging for more.',
    price: 8
  })
  await item18.save()

  const menu3 = await new Menu({
    name: 'First Menu',
    items: [
      item13._id,
      item14._id,
      item15._id,
      item16._id,
      item17._id,
      item18._id
    ]
  })
  await menu3.save()

  const foodTruck3 = await new FoodTruck({
    name: 'Express Kitchen',
    menu: menu3._id,
    location: 'East of the park',
    image:
      'https://media.baamboozle.com/uploads/images/112140/1621611872_52840_gif-url.gif',
    rating: 5,
    openHours: '10am-6pm'
  })
  await foodTruck3.save()

  console.log('Created products!')
}

const run = async () => {
  await Item.deleteMany()
  await Menu.deleteMany()
  await FoodTruck.deleteMany()
  await main()
  db.close()
}

run()
