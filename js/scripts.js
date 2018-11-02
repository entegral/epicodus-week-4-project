// ---------------------------------------------------------------------------
        // Business Logic
// ---------------------------------------------------------------------------

function Order(name, delivery) {
  this.list = [],
  this.name = name,
  this.address = "",
  this.delivery = delivery,
  this.subtotal = 0,
  this.total = 0
};

Order.prototype.addPizza = function (pizza) {
  this.list.push(pizza);
  this.subtotal += pizza.price;
};

Order.prototype.calculateTotal = function () {
  this.list.forEach(function(pizza){
    this.total += this.subtotal;
    if (this.delivery){
      this.total += 5;
    }
  });
};

function Pizza(size, toppings){
  this.veggieOptions = ["sun dried tomatoes", "onion", "bell pepper", "olives", "mushrooms", "pineapple"],
  this.meatOptions = ["sausage", "pepperoni", "bacon", "chicken"],
  this.sauceOptions = ["marinara", "BBQ", "alfredo", "pesto", "buffalo"],
  this.crustOptions = ["thin", "stuffed", "deep dish", "regular"],
  this.sizeOptions = ["small", "medium", "large", "family"]
  this.userChoice = [],
  this.price = 0
};

Pizza.prototype.addToppings = function (toppingSelection, toppingValue) {
  toppingSelection.forEach(function(topping){
    this.userChoice.push(topping);
    this.price += toppingValue;
  });
};

Pizza.prototype.setSize = function (sizeSelection) {
  if (sizeSelection === "small"){
    this.price += 6;
  } else if (sizeSelection === "medium") {
    this.price += 8;
  } else if (sizeSelection === "large") {
    this.price += 10;
  } else if (sizeSelection === "family") {
    this.price += 12;
  }
};





// ---------------------------------------------------------------------------
        // User Interface Logic
// ---------------------------------------------------------------------------


$(function() {

  $("#buildPie").click(function(){
    $("#intro").hide()
    $(".build").show()


  })

});
