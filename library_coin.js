// use strict makes the js code to be executed in the strict mode.

"use strict";

var input = {
  cents: 0,

  isValid: function () {
    //  validating the user entered input.

    if (this.cents < 0 || this.cents > 99) {
      return false;
    } else {
      return true;
    }
  },

  //function that calculate number of quaters, dimes, nickels, pennies.
  getNumber: function (divide) {
    var input = this.cents / divide;

    if (this.cents > 0) {
      this.cents = this.cents % divide;
    }
    return Math.floor(input);
  },
};
