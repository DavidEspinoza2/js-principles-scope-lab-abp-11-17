// Write your solution in this file!

var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'jack';
let favoriteCustomer = 'billy';

function upperCaseCustomerName(){
  return customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'dean';
}

function attemptTwoFavoriteCustomers(){
  favoriteCustomer = 'billy';
}
