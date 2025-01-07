const express = require("express")
const app = express()
//add status 200 for all 
app.use((request,response,next)=>{
  console.log(request.method+ "/" + request.url)
  next();
})
app.use((request,response,next)=>{
  console.log(request.method+ "/" + request.url)
  next();
})

const drinksMenu = [
  {
  type: "Sweet",
  description: "A selection of sweet drinks that provide a perfect balance of flavors.",
  list: [
    {
      name: "Honey Lemonade",
      description: "A refreshing drink made with a blend of honey and fresh lemonade, offering a perfect balance of sweet and tart flavors."
    },
    {
      name: "Caramel Macchiato",
      description: "A sweet espresso drink layered with vanilla syrup, steamed milk, and a drizzle of caramel sauce."
    },
    {
      name: "Strawberry Milkshake",
      description: "A creamy milkshake made with fresh strawberries, vanilla ice cream, and milk, delivering a sweet and smooth treat."
    },
    {
      name: "Peach Iced Tea",
      description: "A chilled and fruity iced tea infused with peach flavors, making it the ideal refreshing sweet drink for any occasion."
    },
    {
      name: "Chocolate Smoothie",
      description: "A rich smoothie made with chocolate syrup, milk, and ice, offering a sweet and indulgent treat perfect for chocolate lovers."
    },
    {
      name: "Vanilla Bean Frappe",
      description: "A creamy iced coffee blended with vanilla syrup and milk, topped with whipped cream, offering a smooth and sweet coffee experience."
    },
    {
      name: "Cinnamon Roll Latte",
      description: "A warm espresso drink combined with steamed milk and a touch of cinnamon, delivering the comforting taste of freshly baked cinnamon rolls."
    },
    {
      name: "Maple Pecan Shake",
      description: "A smooth milkshake made with vanilla ice cream, maple syrup, and crushed pecans, creating a sweet and nutty treat."
    },
    {
      name: "Tiramisu Coffee",
      description: "An indulgent coffee drink flavored with mascarpone, cocoa, and espresso, bringing the flavors of classic tiramisu to your cup."
    },
    {
      name: "Blueberry Muffin Smoothie",
      description: "A smooth and creamy smoothie made with fresh blueberries, vanilla yogurt, and a hint of cinnamon, reminiscent of a freshly baked muffin."
    }
  ],
},{
  type: "Sour",
  description: "A tangy and refreshing selection of sour drinks that will tantalize your taste buds.",
  list: [
    {
      name: "Lime Mojito",
      description: "A sour and refreshing cocktail made with lime, mint, rum, and soda water, offering a perfect blend of tangy and minty flavors."
    },
    {
      name: "Grapefruit Spritzer",
      description: "A zesty and sour drink made with fresh grapefruit juice and sparkling soda water, delivering a citrusy and bubbly experience."
    },
    {
      name: "Sour Apple Lemonade",
      description: "A tart and refreshing combination of green apple and lemonade, creating a sour yet sweet flavor profile."
    },
    {
      name: "Tamarind Drink",
      description: "A traditional sour beverage made from tamarind pulp, often mixed with sugar and spices, offering a bold and tangy taste."
    },
    {
      name: "Pineapple Sour",
      description: "A tangy drink made from fresh pineapple juice and a splash of lime, providing a refreshing and sour tropical taste."
    },
    {
      name: "Citrus Punch",
      description: "A lively drink combining orange, lemon, and lime juices with a splash of soda, creating a bold and citrusy punch."
    },
    {
      name: "Pomegranate Lime Cooler",
      description: "A tart and refreshing combination of pomegranate and lime, served with ice for a cooling and sour experience."
    },
    {
      name: "Lemon Cucumber Fizz",
      description: "A tangy and refreshing drink made with lemon, cucumber, and a touch of soda water, delivering a crisp and rejuvenating flavor."
    },
    {
      name: "Berry Lemonade Twist",
      description: "A sour and slightly sweet beverage made with a mix of berries and lemonade, offering a refreshing and tangy combination."
    },
    {
      name: "Kiwi Limeade",
      description: "A tangy and sweet drink made with fresh kiwi and lime juice, blended with a hint of sweetness for a refreshing and fruity taste."
    }
  ]
}
];

app.get("/", (request, response) => {
  response.send("<h2>Welcome to Different types of drinks!")
})

function getRandomIndex(sectionNumber) {
  if (sectionNumber == 1) {
    return Math.floor(Math.random() * drinksMenu[0].list.length);
  } else if (sectionNumber == 2) {
    return Math.floor(Math.random() * drinksMenu[1].list.length);
  } else {
    console.log("Error")
  }
};
app.get("/docs", (req, res) => {
  res.status(200).send("Go to /api/SweetList to see list of sweet drinks as well as their description and go to /api/SourList to see the list of sour drinks as well as their description and go to /api/RandomDrinkSweet to recieve a random sweet drink")
})
app.get("/api/SweetList", (req, res) => {
res.status(200).json(drinksMenu[0].list)
})
app.get("/api/SourList", (req, res) => {
  res.status(200).json(drinksMenu[1].list)
  })
app.get("/api/randomDrinkSweet", (req, res) => {
  let random = getRandomIndex(1)
    res.status(200).json(drinksMenu[0].list[random])
})

app.listen(3000, () => {
  console.log("Server is running https://localhost:3000")
})

app.use((req, res, next) => {
  res.status(404).send("404 NOT FOUND")
})