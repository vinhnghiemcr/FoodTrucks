
import Truck from '../components/Truck'
import React from 'react'


const data = {
  name: 'Wendylicious Nigerian Cuisine Food',
  menu: {
    name: 'Special',
    items: [
      {
        name: 'Ji Mmiri Oku (Yam Pepper Soup)',
        description:
          'Known as Ji mmiri oku (meaning yam in hot water), the yam pepper soup is prepared with lots of different fish from stock fish to smoked fish to fresh fish and dried crayfish. All of these you can find at the African market or just order off Amazon. I would tell you though, that the ones from the local African markets are tastier, from my personal experience. The active ingredient that gives this dish its flavor and is known to helping sterilize the womb by flushing out the lochia postpartum and aiding in faster healing, is known as Uda. It is also known as Hwentia, Grains of Selim, Xylopia Aethiopica, Uda Spice, Diarr, Uda Seed, negro pepper (bruh, I low key feel like this one is offensive ngl 😂)... Anyways, it has a ton of names, I think you get that now. Uda is sometimes crushed and used topically to treat skin infections like boils, rashes and sores. Pepper soup spice also contains Uziza seeds (African black pepper or Piper Guineese), which provide medicinal, intestinal, culinary and dietary benefits. Uziza is used in a number of herbs to treat everything from male fertility to shrinking fibroids, to warding off insects, to increasing contraction of uterine walls during childbirth, rheumatism, diabetes, hypertension, to improve appetite, diarrhea, menstrual cramps. And because it is a powerful anti-oxidant, it is used in native medicine to shrink and destroy cancerous cells, cysts and tumors. While Uziza is safe for pregnant women, I wouldn’t advise pregnant women to consume Uda, as it is counter productive since it is used for cleaning out the womb. Sometimes yam pepper soup is made with “Aju Mbaise” (Meaning a wrap from Mbaise), which is a local herb of the Mbaise people of Imo state in Eastern Nigeria and is most known to aid in losing pregnancy weight. It is a combination of ginger roots, uziza seeds, Uda, and the Aju bark found on a medicinal tree local to Mbaise. Asides all the health benefits of these ingredients, it is a tasty dish that can be enjoyed at anytime.',
        image:
          'https://static.wixstatic.com/media/ebc9b2_dfbd965d5f1a4a2b9289c21365ab41a0~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_dfbd965d5f1a4a2b9289c21365ab41a0~mv2.webp',
        price: 20
      }
    ],
    name: 'Drinks menu',
    items: [
      {
        name: 'Zobo',
        description:
          'Zobo is a popular drink in Nigeria made from hibiscus flower and ginger. It is filled with antioxidant properties and is the perfect drink for every occasion.',
        image:
          'https://static.wixstatic.com/media/ebc9b2_26a8b55115734b12aa4c21714839cde7~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_26a8b55115734b12aa4c21714839cde7~mv2.webp',
        price: 4
      },
      {
        name: 'Chapman',
        description:
          'Chapman is a popular drink in Nigeria invented in the very heart of lagos. It is packed with fizz, with orange and lime flavors, and is the perfect mocktail!',
        image:
          'http://1.bp.blogspot.com/-S4_65zi3VZw/VKfbeLnEtoI/AAAAAAAAHHw/7mNpV6m0w3Y/s1600/Chapman%2BDrink.JPG',
        price: 4
      }
    ],

    name: 'Rices',
    items: [
      {
        name: 'Naija Jollof Rice',
        description:
          'The Jollof rice is probably the most popular Nigerian dish, many thanks to the #JollofWars popularized by social media.  Jollof rice is rice steamed in a deep fried tomato sauce marinade, seasoned to perfection and garnished with vegetables and onions. Nigerian food is typically very spicy, but I realize that most people cannot handle that level of spice so our jollof rice at Wendylicious is prepared at mild-medium spice levels. You can grab some of our original Wendylicious sauces that come in 4 different spice levels, to add to your jollof rice for your required spice level. Wendylicious Jollof rice is gluten free, Soy Free and Peanut-Free. Contains: Tomatoes, Onions, Garlic, Ginger, Mixed Vegetables, Seasoned Salt, Chicken Stock, Habanero, Bouillon, Oregano, Cilantro, Thyme, Curry, Vegetable Oil, Parsley, Parboiled Rice.  Allergen information: Some of the spices may have been made in factories that produce soy and wheat.',
        image:
          'https://static.wixstatic.com/media/ebc9b2_ca39e530edef4f379ef2f02d109367cd~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_ca39e530edef4f379ef2f02d109367cd~mv2.webp',
        price: 15
      },
      {
        name: 'Nigerian Fried Rice',
        description:
          'Fried rice is a staple in most Nigerian homes, but I make mine a bit different that you would taste in most Nigerian households. I like to think mine is much better :D Wendylicious fried rice is a curried rice cooked in stir-fried vegetables and sauces, seasoned to perfection. The Wendylicious fried rice is very rich and would definitely leave you wanting more! Nigerian food is typically very spicy, but I realize that most people cannot handle that level of spice so our fried rice at Wendylicious is prepared at mild-medium spice levels. You can grab some of our original Wendylicious sauces that come in 4 different spice levels, to add to your fried rice for your required spice level. I highly recommend it! Contains: Rice, Vegetable Oil, Curry, Thyme, Parsley, Onion, Garlic, Ginger, Mixed Vegetables, Oyster Sauce, Spring Onions, Habanero, Bouillon, Chicken Stock, Water, Beef Sausage Allergen Information: Contains Oyster Sauce which is a shellfish.',
        image:
          'https://static.wixstatic.com/media/ebc9b2_c4df5e7a311b4899bbd0c3d7a6bce422~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_c4df5e7a311b4899bbd0c3d7a6bce422~mv2.webp',
        price: 15
      },
      {
        name: 'Rice and Beef Stew',
        description:
          'Beef flavored steamed rice in vegetables with beef tomato stew. Ingredients: (Stew Base): Tomato Sauce, Tomato Paste, Beef, Palm Oil, Beef Stock (Water, Onions, Garlic, Ginger, Seasoned Salt), Seasoned Salt, Curry, Thyme, Oregano, Parsley, Water, (Rice): Parboiled Rice, Water, Beef Stock (Water, Onions, Garlic, Ginger, Seasoned Salt), Sweet Corn',
        image:
          'https://static.wixstatic.com/media/ebc9b2_7a976f96852b4008a5fdbebbb2bb2d42~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_7a976f96852b4008a5fdbebbb2bb2d42~mv2.webp',
        price: 15
      }
    ],
    name: 'Proteins',
    items: [
      {
        name: 'Wendylicious Peppered Chicken',
        description:
          'Juicy fall-off-the-bone chicken, dipped in a deliciously seasoned onion sauce, tenderly grilled and cooked in the original Wendylicious sauce.  All I can tell you is that this peppered chicken is the reason why I started Wendylicious in the first place! I can guarantee that it is going to be a hit everytime. It is that good! Nigerian food is typically very spicy, but I realize that most people cannot handle that level of spice so our peppered chicken at Wendylicious is prepared at mild-medium spice levels. You can grab some of our original Wendylicious sauces that come in 4 different spice levels, to add to your peppered chicken for your required spice level. I highly recommend it! P.S- I`ll put in extra napkins to wipe off that drool from your face! Contains: Chicken, Vegetable Oil, Onions, Habanero, Mixed Bell Peppers, Spring Onions, Seasoned Salt.',
        image:
          'https://static.wixstatic.com/media/ebc9b2_00939d2b193e489b98e558929d336305~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_00939d2b193e489b98e558929d336305~mv2.webp',
        price: 18
      },
      {
        name: 'Peppered Turkey',
        description:
          'Turkey thighs or wings cooked in flavorful broth, roasted and sauteed in Wendylicious Peppered Sauce Ingredients: Turkey, Mixed Bell Peppers, Ghost Peppers, Vegetable Oil, Boullion. Allergen Information: This product is Gluten, Dairy, Soy, Peanut-free.',
        image:
          'https://static.wixstatic.com/media/ebc9b2_98e911ef8f4b433386c3b5eb36e7936d~mv2.jpeg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_98e911ef8f4b433386c3b5eb36e7936d~mv2.webp',
        price: 20
      }
    ],
    name: 'Soups',
    items: [
      {
        name: 'Efo-Riro',
        description:
          'Efo-Riro, which is Yoruba for "efo" which means "leafy vegetable i.e. spinach" and "riro" which means "to stir". Efo-riro is a rich vegetable soup cooked with all sorts of meats, fish and beef parts i.e tripe. It is delicious and you only have to try it once to get hooked! Seriously. Efo-riro can be paired with any carb dish. Ingredients: Spinach, Beef, Beef Tripe, Beef Tendons, Beef Shank, Dried Prawns, Dried Fish, Palm Oil, Onions, Locust Beans. Allergens: Gluten Free, Soy Free, Dairy Free, Peaunut Free. Contains Shellfish.',
        image:
          'https://static.wixstatic.com/media/ebc9b2_2483c22fa6d34d6a82e1aca957fea031~mv2.jpeg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_2483c22fa6d34d6a82e1aca957fea031~mv2.webp',
        price: 15
      },
      {
        name: 'Edikang Ikong',
        description:
          'Edikaikong is Efik for "Vegetable Soup". It is native to Efik speakers, which are people from Cross River State and Akwa Ibom State in Nigeria. It is very nutritious and is prepared with Ugwu (Pumpkin leaves) and Water leaves. Some people like to eat this after recovering from an illness as they believe it to have replenishing qualities. Edikaikong is made with beef and beef parts, stock fish, crayfish... Find out why Calabar dishes are said to be one of the best tribal dishes in Nigeria.',
        image:
          'https://static.wixstatic.com/media/ebc9b2_308df278e5ca4ebfb5b4ba0c96e70cf0~mv2.jpeg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_308df278e5ca4ebfb5b4ba0c96e70cf0~mv2.webp',
        price: 15
      },
      {
        name: 'Seafood Okra',
        description:
          'Okra soup is a staple in a lot of Nigerian homes. The Wendylicious seafood okra soup is a very rich, very yummy okra soup with an ungodly amount of seafood packed in it! :D Contains: Okra, tilapia fillet, shrimp, Octopus, Snail, Scallop, Palm Oil, Habanero, Crayfish, Onions Seafood Assortment (Wild Caught Squid Rings & Tentacles, Wild Caught Octopus, Blanched Clam Meat, Blanched Mussel Meat) Here`s what a customer had to say about the seafood okra: `I asked for an okra dish and got wonderful okra stew with seafood-- lots of seafood, and with pounded yam. All was ready on schedule and was scrumptious with just enough spice. And I loved the jollof rice too. Wendy is a delight and willing to make what you want. I can hardly wait to try the pepper chicken` -Dale G Need I say more?',
        image:
          'https://static.wixstatic.com/media/ebc9b2_fd6da7126483406c8a097ab6683c87df~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_fd6da7126483406c8a097ab6683c87df~mv2.webp',
        price: 15
      }
    ],
    name: 'Pastries',
    items: [
      {
        name: 'Puff-Puff',
        description:
          'Puff-Puff is a signature of "small chops"(which is basically the nickname for finger-foods in Nigerian parties. It is similar to the French beignets, only in a ball. Here you have regular puffpuffs and 2 of my own inventions: The Red velvet Puff-Puff and the "Green Goblin"(comic nerd here) puff-puffs. The red velvet contains cocoa powder and the green goblin is infused with white chocolate. Like my Naija people would say, this one is "Puffpuff wey go Harvard" (just means its boujee) Ingredients: Flour, Sugar, Yeast, Nutmeg, Vanilla Flavor, Water, Cocoa Powder, White Chocolate, Vegetable Oil, Powdered Sugar. Allergens: This product contains  Gluten and Dairy. It is Soy, Peanut and shellfish-free.',
        image:
          'https://static.wixstatic.com/media/ebc9b2_fbbebdd8853c4d7fbc87ef289c89a60e~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_fbbebdd8853c4d7fbc87ef289c89a60e~mv2.webp',
        price: 6
      }
    ],
    name: 'Sauces',
    items: [
      {
        name: 'Wendylicious Spicy Sauce',
        description:
          'Ever skipped the sauce because you didn`t like the strong taste, and didn`t want to change the taste of your food? Well me too! Which is why I created the Wendylicious Spicy Sauce! It is an onion based sauce seasoned to perfection, garnished to taste. A Wendylicious original that goes with every meal. try it! Nigerian food id typically very spicy. I realized early that not many people can handle that level of spice, so I decided to create 4 different spice levels 1. Can`t handle spicy: Which like the name, is for people that cannot handle spicy foods at all.  2. Mayba a little spicy: You still can`t handle spicy food as well, but you are better than most people. 3. Give me Spicy: You can sit at a table with Nigerians eating Nigerian food, and hold your own. 4. Dragon Breath: IF YOU KNOW YOU KNOW! Contains: Vegetable Oil, Mixed Bell Peppers, Onions, Ghost Peppers, Seasoning Salt',
        image:
          'https://static.wixstatic.com/media/ebc9b2_5c676a8dad224043a3a0f91bcf063bee~mv2.jpeg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_5c676a8dad224043a3a0f91bcf063bee~mv2.webp',
        price: 12
      },
      {
        name: 'Wendylicious Jollof Rice Mix',
        description:
          'Now you can make your own Jollof Rice from the comfort of your own home, and have it taste just as good as the real deal! The Jollof rice is probably the most popular Nigerian dish, many thanks to the #JollofWars popularized by social media. The jollof mix could be added to soups like efo-riro and okra soup to levate the taste, be used to prepare stews, or most importantly, be used in making your very own jollof rice. To use in jollof rice: Add washed rice to a bowl, add water or stock (vegetable, beef or chicken etc) just enough to rise an inch above the rice, add jollof mix, cover pot with foil then close lid. Cook at low-medium heat for 30 minutes. Voila! You have your delicious pot of Jollof rice! Ingredients Tomatoes, Onions, Garlic, Ginger, Mixed Vegetables, Seasoned Salt, Chicken Stock, Habanero, Bouillon, Oregano, Cilantro, Thyme, Curry, Vegetable Oil, Parsley Some of the spices may have been made in factories that produce soy and wheat.',
        image:
          'https://static.wixstatic.com/media/ebc9b2_ae18f7c8007845db96c822822686d8a1~mv2.jpeg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_ae18f7c8007845db96c822822686d8a1~mv2.webp',
        price: 14
      }
    ],
    name: 'Stews',
    items: [
      {
        name: 'Ayamase(Designer Stew)',
        description:
          'Ayamase or Designer Stew. Ayamase roughly translates to "Mase`s wife", and it is said that she was the originator of this delicious delicacy. Ayamase is roughly blended green bell peppers, deep fried with Iru (fermented melon seeds) in bleached palm oil. Ayamase can be eaten with steamed rice, or pretty much any carb dish. Really, it`s that sauce you can literally eat with anything you want. Even bread (okay some might disagree, but trust me on this one ;) ) Ingredients: Green Bell Peppers, Onions, Habanero, Assortment of Beef Parts, Palm Oil, Locust Beans (iru). Allergens: This product is Gluten, Dairy, Soy, Peanut free. Contains Shellfish.',
        image:
          'https://static.wixstatic.com/media/ebc9b2_5d7431d46f5c4d20b6aa779b493ebd5a~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_5d7431d46f5c4d20b6aa779b493ebd5a~mv2.webp',
        price: 18
      },
      {
        name: 'Turkey Stew',
        description:
          'Deep fried tomato sauce, seasoned in turkey broth and simmered to perfection. Comes with fried turkey.',
        image:
          'https://static.wixstatic.com/media/ebc9b2_4bba183ad1394260ab3008eb8a9d0825~mv2.jpg/v1/fill/w_560,h_420,al_c,q_80/ebc9b2_4bba183ad1394260ab3008eb8a9d0825~mv2.webp',
        price: 4
      }
    ]
  },
  location: 'North West',
  image:
    'https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/277352757_530623925343639_7935337459253621758_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=NUIegdbxREwAX-tQk4i&_nc_ht=scontent-lga3-1.xx&oh=00_AT-17dv8jGulEx-5FUtaexec3k2RZSbVXQt920LAAf4fLA&oe=62417B6B',
  reviews: [
    {
      name: 'Renata G',
      description:
        'GREAT EXPERIENCE!! It`s the first time we had Nigerian food. The the chicken was juicy and super flavorful, but we specially loved both rices (we ordered one of each, jollof and fried)!! We really liked the spices! It`s not very often that you find food that prepared with such care. We had the two middle sauces as well ("give me spicy" and "maybe a little spicy"), and they complemented well the dish. They do have a kick - we like spicy, but normally we are reluctant to ask for the super hot dishes in restaurants with traditionally spicy cuisines. I think we made the right choice of sauces. They were tasty and had the right amount of heat. Not only the food, but the service was also great. We ordered via SMS and Wendy was super responsive. The food was ready at the time promised, and easy to pick up. She also made sure that everything was right and that we liked it. We`ll definitely come back for more sometime...',
      rating: 5,
      date: 07 / 24 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Lee D.',
      description:
        'You. Need. To. Order. Right. Now. I`m lucky and live two seconds from this lovely human. She was incredibly prompt with her response when it came to ordering. She gave me a specific time frame that she needed in order to make sure our food was ready. It was beautifully cooked. Bursting with flavor and you could tell she passionate about her cooking. I`ll be ordering again!',
      rating: 5,
      date: 07 / 21 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Megan A.',
      description:
        'We had the jollof rice w/chicken at two different spice levels, and both were delicious!! Will definitely be back for more. Thank you Wendy!',
      rating: 5,
      date: 07 / 20 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Glory Audette',
      description:
        'This is awesome correct food!!!! Look no further people🤩. So satisfied especially with my moi moi groove..',
      rating: 5,
      date: 08 / 01 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Chichi U.',
      description:
        'Meal tastes great. Never had a more delicious delicacy. I`m Nigerian so I had high expectations when I ordered. So glad they were met. Thank you Wendy, I`d definitely order again.',
      rating: 5,
      date: 07 / 20 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Leslie O.',
      description:
        'Wendy`s food is so delicious and fresh! She accommodated our vegan diet by preparing a veggie mix to sub for the chicken. (Already had vegan side options.) And don`t forget to try all the sauce spice levels!! Very easy ordering and pickup. A delightful experience!',
      rating: 5,
      date: 07 / 30 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'William B.',
      description:
        'Phenomenal Nigerian cuisine! Support this small business if you value excellent, authentic food in Old Town. This is the good stuff.',
      rating: 5,
      date: 07 / 25 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'William Buschur',
      description:
        'Phenomenal Nigerian cuisine! Support this small business if you value excellent, authentic food in Old Town. This is the good stuff.',
      rating: 5,
      date: 07 / 26 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Billy S.',
      description:
        'Phenomenal Nigerian cuisine! Support this small business if you value excellent, authentic food in Old Town. This is the good stuff.',
      rating: 5,
      date: 07 / 25 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Amaka U.',
      description:
        'I JUST HAD THE BEST FOOD I EVER TASTED IN AMERICA, AND YOU HAVE TO KNOW ABOUT IT!!!! I moved out here from London and I struggled with eating out because most of the food in my opinion, were mostly bland. I`m Nigerian, and so when I saw that there was a new Nigerian food delivery service opening up, I thought I would try it just for the sake of having a taste of home (and also the owner and I share the same name, so I thought I`d support) I am happy to report that I WAS BLOWN AWAY BY THE FOOD. Everyone that knows me knows how much of a picky eater I am. I have never left a review for anything ever, but this food was too good not to share with the world. It was even better than most of what I had back home in Nigeria. It is tasty, the chicken is yummy and it was the perfect definition of home-cooked meal. I am definitely placing another order, and hopefully the owner Wendy would have a subscription model soon so I could start making weekly subscriptions. Best part is she even caters! Guys!!! And the portions are very generous. She makes custom orders in case you are curious about any Nigerian foods that is not on her menu. I AM IN THE CLOUDS!!! It should be illegal for food to taste that good! Okay I`ll stop now. Lol. But you should check it out. I`ve attached a copy of the menu. You can call, text or email to place your order. And please let me know what you think when you do try it. P.S Couldn`t even take pictures of my food, ate it so fast lol!',
      rating: 5,
      date: 07 / 20 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'A. R.',
      description:
        'The food is delicious. I personally love the peppered Chicken. it`s well seasoned and tasty',
      rating: 5,
      date: 07 / 20 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Dale G.',
      description:
        'I asked for an okra dish and got wonderful okra stew with seafood-- lots of seafood, and with pounded yam. All was ready on schedule and was scrumptious with just enough spice. And I loved the jollof rice too. Wendy is a delight and willing to make what you want. I can hardly wait to try the pepper chicken. Dale',
      rating: 5,
      date: 07 / 20 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Emma M.',
      description:
        'I absolutely enjoyed Wendylicious quinoa jollof! It was so so tasty. This was a healthy alternative that was so flavourful!',
      rating: 5,
      date: 07 / 20 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Morgan P.',
      description:
        'Wendy is so talented! Transaction was easy and by text/email and food was out of this world! We tried both rices and the chicken and feasted. We shared with neighbors who said it was amazing as well! Highly recommend- get ready for a treat!',
      rating: 5,
      date: 08 / 01 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Shannon M.',
      description:
        'We were looking for something different and found it with Wendylicious Nigerian Cuisine. We tried everything. The chicken and the sides in both the rice and the quinoa option. Everyone in the family had their favorites. I`m were the jollop quinoa and the fried rice. We went with the Little bit of spice for the chicken and it was very flavorful with just a bit of zing. Delish.',
      rating: 5,
      date: 07 / 20 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Chris C.',
      description:
        'Wow! Such an explosion of flavors - the chicken & the rice complement each other so well. Everything was exquisitely prepared. Just wonderful. I`m new to Nigerian food, but with Wendylicious around I won`t be for long!',
      rating: 5,
      date: 07 / 20 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Reuben A.',
      description:
        'The source of really good Nigerian cuisine. A no-brainer for folks with a predilection for spicy food.',
      rating: 5,
      date: 07 / 20 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Wind V.',
      description:
        'Wendylicious is a great local restaurant. So glad to have Nigerian food in old town! I had the chicken and every bite was packed with flavor. they even have vegan options! def give this food a try!!!',
      rating: 5,
      date: 07 / 21 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'V. L.',
      description:
        'I ordered the pepper chicken and jollof and it was delicious. The food was ready and hot when I went to pick it up. This was my very first time having jollof and I was very impressed. I strongly recommend ordering from Wendy! Will definitely order again.',
      rating: 5,
      date: 07 / 21 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Stephen L.',
      description:
        'The food is FANTASTIC. My wife and I ordered one each of the two main rice and chicken entrees and six pieces of the pepper chicken to share, along with three of the sauces, and all of it was excellent. The chicken was juicy and everything was fresh, delectably seasoned and affordably priced (especially for this area and with the generous portions). The dishes are simultaneously restaurant quality but clearly made with the same care as homemade. I`m a big hot sauce/spicy food fan while my wife is less fond of heat, and we were both hugely satisfied with the options we ordered. Highly recommend.',
      rating: 5,
      date: 07 / 24 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    },
    {
      name: 'Ryan A',
      description:
        'This was my first time having Nigerian food, so I figured why not give it a try and order each of the dishes with various sauces. And we were extremely....',
      rating: 5,
      date: 07 / 22 / 2020,
      truck: 'Wendylicious Nigerian Cuisine'
    }
  ]
}

const TruckPage = () => {
  return (
    <div>
      <Truck />
    </div>
  )
}

export default TruckPage

