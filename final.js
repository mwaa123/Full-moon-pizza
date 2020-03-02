$(document).ready(init);function init() {
    $(".navTab").click(doTabClick).eq(0).click();
    $("#stepOne").click(nextPage);
    $("#stepTwo").click(pizzaBuilder);
}var smallCrust = 700;
var mediumCrust = 900;
var largeCrust = 1200;
var oneVeggie = 100;
var oneMeat = 150;

function nextPage() {
    $(".navTab").eq(1).click();
}
function pizzaBuilder(){
    var pieSize = $("input[name='size']:checked").val();
    var crustType = $("input[name='crust']:checked").val();   
     var firstName = $("#firstname").val();
    var lastName = $("#lastname").val();
    var street = $("#streetaddress").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var phone = $("#phonenumber").val();

    var ingredients =[];
    $("input[name='meat']:checked").each(function() {
        ingredients.push(this.value);
    });
    $("input[name='veggie']:checked").each(function () {
        ingredients.push(this.value);
    });    var pieBuild = ingredients.join(", ");
    var subtotal = 0;  

    $("#OrderView").html("Size: " + pieSize + "<br/>");
    $("#OrderView").append("Crust type: " + crustType + "<br/>");
    $("#OrderView").append("Ingredients: " + pieBuild + "<br/>"); 


    $("#contactInfo").html("Name: " + firstName + " " + lastName + "<br/>");
    $("#contactInfo").append("Phone: " + phone + "<br/>");
    $("#contactInfo").append("Address: " + street + " " + city + " " + state + " " + "<br/>");    
    
    if (pieSize == "small"){
        subtotal = subtotal + 500;
    } else if(pieSize == "medium"){
        subtotal = subtotal + 1000;
    } else if(pieSize == "large"){
        subtotal = subtotal + 1500;
    } else {
        alert("HI YOU HAVE ORDERED")
    }    var meats = $("input[name='meat']:checked").length;
    if (meats > 0 ){
        subtotal = subtotal + (meats * 150);
    }
    var veggies = $("input[name='veggie']:checked").length;
    if (veggies > 0 ){
        subtotal = subtotal + (veggies)
    }    var tax = subtotal * .16;

    var grandTotal = subtotal + tax + 200.00;

    $("#infoSummary").html("Name: " + firstName + " " + lastName + "<br/>");
    $("#infoSummary").append("Address: " + street + " " + city + " " + state + " " + "<br/>");
    $("#infoSummary").append("Phone: " + phone + "<br/>");   
     
    $("#mealSummary").html("Subtotal: ksh" +subtotal + "<br/>");
    $("#mealSummary").append("Sales tax: ksh" + tax + "<br/>");
    $("#mealSummary").append("Delivery charge: ksh" + 200 + "<br/>");
    $("#mealSummary").append("Grand Total: ksh" + grandTotal + "<br/>");   
     $(".navTab").eq(2).click();
    return false;
}
function doTabClick() {
    $(".divTab").hide().filter(this.hash).show();
    $(".navTab").removeClass("selected");
    $(this).addClass("selected");
}