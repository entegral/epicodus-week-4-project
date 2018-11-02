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

Order.prototype.addPizza = function (veggieArray, meatArray, sauce, crust, size) {
  var pizza = new Pizza();
  this.list.push(pizza);
  pizza.addToppings(veggieArray, 1);
  pizza.addToppings(meatArray, 2);
  pizza.setSauceCrustAndSize(sauce, crust, size);
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

Pizza.prototype.setSauceCrustAndSize = function(sauce, crust, size) {
  this.toppingChoices.push(sauce);
  this.price += 1;
  this.toppingChoices.push(crust);
  this.price += 1;
  this.size = size;
  this.price += 10;
};

Pizza.prototype.addToppings = function (toppingSelection, toppingValue) {
  toppingSelection.forEach(function(topping){
    order.list[order.list.length - 1].toppingChoices.push(topping);
    order.list[order.list.length - 1].price += toppingValue;
  });
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
};

BuildPizzaPage.prototype.displayVeggies = function (veggieSelector) {
  var veggiesToDisplay = "<h4>Veggie Options</h4>";
  this.veggieOptions.forEach(function(topping){
    veggiesToDisplay += "<div class='form-check'><label class='form-check-label'><input class='form-check-input' type='checkbox' name='veggieOptions' value='" + topping + "'>" + topping + "</label></div>"
  });
  veggieSelector.html(veggiesToDisplay);
};

BuildPizzaPage.prototype.displayMeats = function (meatSelector) {
  var meatsToDisplay = "<h4>Meat Options</h4>";
  this.meatOptions.forEach(function(topping){
    meatsToDisplay += "<div class='form-check'><label class='form-check-label'><input class='form-check-input' type='checkbox' name='meatOptions' value='" + topping + "'>" + topping + "</label></div>"
  });
  meatSelector.html(meatsToDisplay);
};

BuildPizzaPage.prototype.displaySauces = function (sauceSelector) {
  var saucesToDisplay = "<h4>Sauce</h4><select id='sauceChoice' class='form-control'>";
  this.sauceOptions.forEach(function(topping){
    saucesToDisplay += "<option value='" + topping + "'>" + topping + "</option>"
  });
  sauceSelector.html(saucesToDisplay + "</select>");
};

BuildPizzaPage.prototype.displaySizes = function (sizeSelector) {
  var sizesToDisplay = "<h4>Size</h4><select id='sizeChoice' class='form-control'>";
  this.sizeOptions.forEach(function(topping){
    sizesToDisplay += "<option value='" + topping + "'>" + topping + "</option>"
  });
  sizeSelector.html(sizesToDisplay + "</select class='form-control'>");
};

BuildPizzaPage.prototype.displayCrusts = function (crustSelector) {
  var crustsToDisplay = "<h4>Crust</h4><select id='crustChoice' class='form-control'>";
  this.crustOptions.forEach(function(topping){
    crustsToDisplay += "<option value='" + topping + "'>" + topping + "</option>"
  });
  crustSelector.html(crustsToDisplay + "</select>");
};

BuildPizzaPage.prototype.displayAll = function (veggieSelector, meatSelector, sauceSelector, sizeSelector, crustSelector) {
  this.displayVeggies(veggieSelector);
  this.displayMeats(meatSelector);
  this.displaySauces(sauceSelector);
  this.displaySizes(sizeSelector);
  this.displayCrusts(crustSelector);
};

BuildPizzaPage.prototype.updateOrderOutput = function (orderDetailSelector) {
  debugger;
  orderDetailSelector.html("<li>Subtotal: " + order.subtotal + "</li><li>Total: " + order.total + "</li>");
};


var order = new Order();

$(function() {

  $("#buildPie").click(function(){
    var buildPizzaPage = new BuildPizzaPage(new Pizza());
    var veggieSelector = $("#veggieOptions");
    var meatSelector = $("#meatOptions");
    var sauceSelector = $("#sauceOptions");
    var sizeSelector = $("#sizeOptions");
    var crustSelector = $("#crustOptions");

    buildPizzaPage.displayAll(veggieSelector, meatSelector, sauceSelector, sizeSelector, crustSelector);

    $("#intro").hide();
    $(".build").show();
  });

  $("#buildPizzaForm").submit(function(event){
    event.preventDefault();
    var sizeChoice = $("#sizeChoice").val();
    var sauceChoice = $("#sauceChoice").val();
    var crustChoice = $("#crustChoice").val();
    var veggieChoices = []
    $("input[name='veggieOptions']:checked").each(function(){
      veggieChoices.push($(this).val());
    });
    var meatChoices = []
    $("input[name='meatOptions']:checked").each(function(){
      meatChoices.push($(this).val());
    });
    order.addPizza(veggieChoices, meatChoices, sauceChoice, crustChoice, sizeChoice);
    $(".build").show();

    var buildPizzaPage = new BuildPizzaPage(new Pizza());
    var veggieSelector = $("#veggieOptions");
    var meatSelector = $("#meatOptions");
    var sauceSelector = $("#sauceOptions");
    var sizeSelector = $("#sizeOptions");
    var crustSelector = $("#crustOptions");

    buildPizzaPage.displayAll(veggieSelector, meatSelector, sauceSelector, sizeSelector, crustSelector);

    var orderDetails = $("#orderDetails");
    debugger;
    buildPizzaPage.updateOrderOutput(orderDetails);

  });

});
