// ---------------------------------------------------------------------------
        // Business Logic
// ---------------------------------------------------------------------------

function Order() {
  this.list = [],
  this.name = "",
  this.address = "",
  this.delivery = false,
  this.subtotal = 0,
  this.total = 0
};

Order.prototype.addPizza = function (veggieChoices, meatChoices, sauceChoice, crustChoice, sizeChoice) {
  var pizza = new Pizza();
  pizza.addToppings(veggieChoices, 1);
  pizza.addToppings(meatChoices, 2);
  pizza.addToppings(sauceChoice, 0.5);
  pizza.addToppings(crustChoice, 1);
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

function Pizza(){
  this.veggieOptions = ["sun dried tomatoes", "onion", "bell pepper", "olives", "mushrooms", "pineapple"],
  this.meatOptions = ["sausage", "pepperoni", "bacon", "chicken"],
  this.sauceOptions = ["marinara", "BBQ", "alfredo", "pesto", "buffalo"],
  this.crustOptions = ["thin", "stuffed", "deep dish", "regular"],
  this.sizeOptions = ["small", "medium", "large", "family"],
  this.toppingChoices = [],
  this.size = "",
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
// -------------------------------------------------------------------------

function BuildPizzaPage(pizza){
  this.veggieOptions = pizza.veggieOptions,
  this.meatOptions = pizza.meatOptions,
  this.sauceOptions = pizza.sauceOptions
  this.crustOptions = pizza.crustOptions,
  this.sizeOptions = pizza.sizeOptions
}

BuildPizzaPage.prototype.displayVeggies = function (veggieSelector) {
  var veggiesToDisplay = "";
  this.veggieOptions.forEach(function(topping){
    veggiesToDisplay += "<div class='checkbox'><label><input type='checkbox' name='veggieOptions' value='" + topping + "'>" + topping + "</label></div>"
  });
  veggieSelector.html(veggiesToDisplay);
}

BuildPizzaPage.prototype.displayMeats = function (meatSelector) {
  var meatsToDisplay = "";
  this.meatOptions.forEach(function(topping){
    meatsToDisplay += "<div class='checkbox'><label><input type='checkbox' name='meatOptions' value='" + topping + "'>" + topping + "</label></div>"
  });
  meatSelector.html(meatsToDisplay);
}

BuildPizzaPage.prototype.displaySauces = function (sauceSelector) {
  var saucesToDisplay = "";
  this.sauceOptions.forEach(function(topping){
    saucesToDisplay += "<option value='" + topping + "'>" + topping + "</option>"
  });
  sauceSelector.html(saucesToDisplay);
}

BuildPizzaPage.prototype.displaySizes = function (sizeSelector) {
  var sizesToDisplay = "";
  this.sizeOptions.forEach(function(topping){
    sizesToDisplay += "<option value='" + topping + "'>" + topping + "</option>"
  });
  sizeSelector.html(sizesToDisplay);
}

BuildPizzaPage.prototype.displayCrusts = function (crustSelector) {
  var crustsToDisplay = "";
  this.crustOptions.forEach(function(topping){
    crustsToDisplay += "<option value='" + topping + "'>" + topping + "</option>"
  });
  crustSelector.html(crustsToDisplay);
}


$(function() {

  $("#buildPie").click(function(){
    var order = new Order();
    var buildPizzaPage = BuildPizzaPage(new Pizza());

    $("#intro").hide();
    $(".build").show();


  })

});
