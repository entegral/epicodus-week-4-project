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
  this.displaySizes(sizeSelector);
  this.displayCrusts(crustSelector);
  this.displaySauces(sauceSelector);
  this.displayVeggies(veggieSelector);
  this.displayMeats(meatSelector);
};

BuildPizzaPage.prototype.updateOrderOutput = function (orderDetailSelector) {
  var output = "";
  var count = 1;
  order.list.forEach(function(each){
    output += "<li>Pizza #" + count + " = $" + each.price + "</li>"
    count += 1;
  })
  output += "<li><strong>Subtotal: $" + order.subtotal + "</li><li>Total: $" + order.total + "<strong></li>"
  orderDetailSelector.html(output);
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
    $(".checkout").hide();
    $(".build").show();
    $(".orderDetails").show();
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
    $(".orderDetails").show();


    var buildPizzaPage = new BuildPizzaPage(new Pizza());
    var veggieSelector = $("#veggieOptions");
    var meatSelector = $("#meatOptions");
    var sauceSelector = $("#sauceOptions");
    var sizeSelector = $("#sizeOptions");
    var crustSelector = $("#crustOptions");

    buildPizzaPage.displayAll(veggieSelector, meatSelector, sauceSelector, sizeSelector, crustSelector);

    var orderDetails = $("#orderDetails");
    buildPizzaPage.updateOrderOutput(orderDetails);

  });

  $("#checkout").click(function(){
    var buildPizzaPage = new BuildPizzaPage(new Pizza());
    $(".build").hide();
    $(".checkout").show();
    order.total = order.subtotal;
    buildPizzaPage.updateOrderOutput($("#orderDetails"));

  });

  $("#checkoutForm").submit(function(event){
    event.preventDefault();
    var userName = $("#name").val();
    if($("checkbox[name='delivery']:checked")){
      order.delivery = true;
      order.address = $("#address").val();
    }
    order.name = userName;
    console.log(order);

    $(".checkout").hide();
    $(".orderDetails").hide();

    var buildPizzaPage = new BuildPizzaPage(new Pizza());
    buildPizzaPage.updateOrderOutput($("#orderSummary"));
    $(".summary").show();

  });

  $("#reloadPage").click(function(){
    window.location.reload(true);
  });

});
