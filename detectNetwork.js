// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var length = cardNumber.length;

  var prefix1 = cardNumber.slice(0, 2);
  var prefix2 = cardNumber.slice(0,1);

  if (length === 14 && (prefix === '38' || prefix1 === '39')) {
    return "Diner's Club";
  } else if (length === 15 && (prefix === '34' || prefix1 === '37')) {
  	return "American Express";
  } else if((length === 13 || 16 || 19) && prefix2 === '4'){
    return "Visa";
  } else if(length === 16 && (prefix1 === '51' || '52' || '53' || '54' || '55')) {
    return "MasterCard";
  }



};
