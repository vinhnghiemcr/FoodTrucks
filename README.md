# FoodTrucks

## Date: 3/23/2022

### By: [Molly Obermeier](https://www.linkedin.com/in/marie-obermeier-6b6b03158/), [Nghiem Truong](https://www.linkedin.com/in/nghiem-v-truong/), [Chinwendu Ukoha](https://www.linkedin.com/in/chinwenduukoha), [Canh Vo](https://www.linkedin.com/in/canh-vo-056122188/)

### [Github](https://github.com/vinhnghiemcr/FoodTrucks) [Trello](https://trello.com/b/WilzloTi/foodtrucks)

---

## **_General Overview_**

A full stack web app that maps out all the foodtrucks available at a theme park, their location, menu and how to purchase each menu item from each food truck.

### **_App Outlook_**

#### The page opens up with a full home page that displays a nav bar, which contains the `AboutPage`, `HomePage` and `TruckPage`.

#### **_The About Page:_** This page gives a detailed description of our app and all of its components.

#### **_The Home Page:_** The Home renders a `map` of the entire theme park, which pinpoints the location of each food truck within the park.

**_The Truck page:_** Once a foodtruck is clicked on the `map` displayed on the `HomePage`, the app automatically loads the `TruckPage`, which renders the `Truck` component and the `Review` for the foodtruck. The `Truck` page renders the `Menu` for that foodtruck, and each menu `Item` that shows the price per item, a cart and a checkout counter.

#### When an `Item` on the `Menu` is selected, the cart is updated with the number of items selected. The user can then select "CheckOut" from the bottom of the page

#### We would be adding a conditional rendering to open the `Receipt` page if the user clicks on the "CheckOut" button. The `Receipt` page would then render a `postReview` page that allows the customers post an optional review on that foodtruck.

---

## **_Technologies_**

- HTML, CSS, JavaScript
- React
- Express
- MongoDB

## **_Screenshots_**

<img src='https://github.com/vinhnghiemcr/FoodTrucks/blob/main/Walkthrough.gif?raw=true'/>

## **_Future Updates_**

#### After completing this project we would like to add many more capabilities, including the functionalities below:

- Update and add trucks across the map
- Develop buying capabilities
- Create an owner login to update, add, or delete their own trucks
- Allow users to leave comments about specific food items
- Develop the map further

## **_Credits_**

Images: [Google](https://www.google.com/)

Theme Park Image: [Pinterest](https://www.pinterest.com/pin/741757001137017881/)

Food Truck: [Giphy](https://giphy.com/gifs/food-cartoon-truck-d31vot4Yoy9r8dwY)

Fonts: [Google Fonts](https://fonts.google.com/)
