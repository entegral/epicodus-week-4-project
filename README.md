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

- [ ] **Create a website for a pizza company where a user can choose one or more individual toppings (cheese, pepperoni, artichoke, anchovy, etc) and a size to order a pizza and see the final cost.**

- [ ] **Create a pizza object constructor with properties for toppings and size.**

- [ ] **Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.**

- [ ] Code meets standards from previous weeks.

- [ ] Constructors and prototypes are used successfully.

- [ ] Application works as expected.

- [ ] Plain English specs are included in your README.

- [ ] Required functionality is in place by the 5:00pm Friday deadline.

- [ ] Project is in a polished, portfolio-quality state.

- [ ] Project demonstrates an understanding of this week's concepts. If prompted, you can discuss your code with an instructor using correct terminology.



## Bonus Objectives

- [ ] Style your site with CSS and images.

- [ ] Allow users to order more than one pizza with different toppings.

- [ ] Display the list of pizzas ordered as links that can be clicked for details.

- [ ] Offer a delivery option that then requires address information.


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


- [ ] Program allows user to establish an order by establishing order information
```
* Input: new Order(Name, delivery)
* Output: Order.name = Name, Order.delivery = false
```

- [ ] Program receives address information if delivery option === true
```
* Input: "1234 Drewery Lane"
* Output: Order.address = "1234 Drewery Lane"
```

- [ ] Program adds custom-made pizza to an order-array
```
* Input: Order.addPizza(customPizza)
* Output: Order.list = [customPizza]
```


### License
Copyright (c) 2018 **_RB_** MIT license.
