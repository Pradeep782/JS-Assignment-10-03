// use strict makes the js code to be executed in the strict mode.

"use strict";

// creating a $ function which fetches the id from the html.
var $ = function (id) {
  return document.getElementById(id);
};

//function named calculateChange that calculates the no of quaters, dimes, pennies, nickels
var calculateChange = function () {
  // declaring the variables
  var cents, quarters, dimes, nickels, pennies;

  // getting the value of the cents.
  input.cents = Math.floor(parseInt($("cents").value));

  // checking whether the entered input is valid or not
  if (input.isValid() == false) {
    // creating an alert if the input is not valid
    alert("Please enter a valid number between 0 and 99");
  } else {
    // validating the input.

    // calculating the quarters.
    quarters = input.getNumber(25);

    // calculating the dimes
    dimes = input.getNumber(10);

    // calculating the nickles
    nickels = input.getNumber(5);

    //calculating the pennies.
    pennies = input.cents % 5;

    // displaying the quarters value.
    $("quarters").value = quarters;

    // displaying the dimes value.
    $("dimes").value = dimes;

    // displaying the nickles value.
    $("nickels").value = nickels;

    // Displaying the pennies value.
    $("pennies").value = pennies;
  }
};

// When the window loads the below function will be executed.
window.onload = function () {
  $("calculate").onclick = calculateChange;
  // using the focus method that shifts the focus on the cents.
  $("cents").focus();
};
