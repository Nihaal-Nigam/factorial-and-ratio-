let factorialOfNumber = require("../factorial/index.js");

let ratioOfTwoNumbers = require("../ratio/index.js");

let obj = {};

let ratioAndFactorial = (a, b, c) => {
  let ratio = ratioOfTwoNumbers(a, b);
  let factorial = factorialOfNumber(c);
  obj = {
    ratio: ratio,
    factorial: factorial,
  };
  return obj;
};

module.exports = ratioAndFactorial;
