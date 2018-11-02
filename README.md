# _Pizza Planet_

#### By _**Robert Bruce**_

## Description

_Pizza Planet is a web application that allows a user to order a custom pizza._
_Pizza Planet accomplishes this through the use of class properties and prototype methods._

## Setup/Installation Requirements

#### Option 1 (recommended):

* _Checkout project on GitHub Pages [here](https://entegral.github.io/epicodus-week-4-project/)._

#### Option 2:

* _Go to https://github.com/entegral/epicodus-week-4-project/_
* _Clone this project or download zip and extract contents_
* _Open the index.html file with your Web Browser_
* _Follow the instructions therein_


## Technologies Used
_GitHub, HTML, CSS, Bootstrap, Javascript, JQuery_

## Learning Objectives

- [x] **Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.**

- [x] **Create a pizza object constructor with properties for toppings and size.**

- [x] **Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.**

- [x] Code meets standards from previous weeks.

- [x] Constructors and prototypes are used successfully.

- [x] Application works as expected.

- [x] Plain English specs are included in your README.

- [x] Required functionality is in place by the 5:00pm Friday deadline.

- [x] Project is in a polished, portfolio-quality state.

- [x] Project demonstrates an understanding of this week's concepts. If prompted, you can discuss your code with an instructor using correct terminology.



## Bonus Objectives

- [x] Style your site with CSS and images.

- [x] Allow users to order more than one pizza with different toppings.

- [ ] Display the list of pizzas ordered as links that can be clicked for details.

- [x] Offer a delivery option that then requires address information.


## Specifications

- [x] Program receives a string of a "topping", and it's price, then updates its topping list and price.
```
* Input: Pizza.addSomething("topping", 1)
* Output: Pizza.toppings = ["topping"], Pizza.price = 1
```

- [x] Program receives a list of similar toppings, and their price/each, then updates its topping list and price total.
```
* Input: Pizza.addSomething(["topping1", "topping2"], 1)
* Output: Pizza.toppings = ["topping1"], Pizza.price = 2
```

- [x] Program receives size information and adds relevant price.
```
* Input: Pizza.setSize("large")
* Output: Pizza.price = 10
```

- [x] Program dynamically adds pizzas to an array within the order object.
```
* Input: order.addPizza("stuff")
* Output: order.list = ["pizza with stuff"]
```

- [x] Program allows user to enter name and address before payment
```
* Input: new Order(Name, deliveryOption, address)
* Output: Order.name = Name, Order.delivery = true, Order.address = "address"
```



### License
Copyright (c) 2018 **_RB_** MIT license.
