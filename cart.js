///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString

// The toLocaleString() method returns a string with a language-sensitive representation of this date. In implementations with Intl.DateTimeFormat API support, this method simply calls Intl.DateTimeFormat.

const formattedTotal = totalPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'})

//Example from Mdn = https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString

// request a currency format
// console.log(number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' }));
// → 123.456,79 €

console.log("The total price of all items is " + formattedTotal)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
  const totalWithTax = cartTotal * (1 + tax);
  const finalPrice = totalWithTax - couponValue;
  return finalPrice;
  }

const discountPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
const couponValue = 5.00;
const tax = 0.06;

const finalPrice = calcFinalPrice(totalPrice, couponValue, tax);

console.log("The new total price after coupon is applied is " + finalPrice.toLocaleString('en-US', {style: 'currency', currency: 'USD'}))


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
firstName - type string: "Businesses rely on clientel names for reference and service, and a string can store names which constist of letters."

lastName - type string: "Businesses rely on clientel names for reference and service, and a string can store names which consist of letters."

email - boolean: "email allows for businesses to advertise certain deals and promotions that a customer might be interested in, however some customers might not be interested in such deals. So they can choose to give their email or not."

phoneNumber - type number: "Businesses always need contact information, particulary phone numbers, which consist of numbers."

zipCode - type number: "The customers location is important for various goods and services, specific locations are usually determined by area-codes; which consists of numbers."

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    firstName:"Sexy", 
    lastName: "McSexypants",
    interestedInEmails: false,
    phoneNumber: 000-555-1234,
    zipCode: 30120
}