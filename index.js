// For all of the following problems, use an array higher order method to solve the problem.
// You should not use any for or while loops!
// For each section, we've provided some sample data for you to test your function with.

const sampleNumbers = [25, 60, 15, 80, 45, 100, 30];

const sampleProducts = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Mouse', price: 25, inStock: true },
  { name: 'Keyboard', price: 75, inStock: false },
  { name: 'Monitor', price: 300, inStock: true }
];

// hard coded
// what is the final value you want? what is the initial value?
let sum = 0;
for (let i = 0; i < sampleNumbers.length; i++) {
  // how are you determining the next value of sum?
  sum = sum + sampleNumbers[i];
}
console.log(sum);

let product = 1;
for (let i = 0; i < sampleNumbers.length; i++) {
  product = product * sampleNumbers[i];
}

const words = ['apple', 'banana', 'carrot'];
let numberOfAs = 0;
for (let i = 0; i < words.length; i++) {
  // how are we determining the next value of numberOfAs?
  const word = words[i];
  let numberOfAsInThisWord = 0;
  for (let j = 0; j < word.length; j++) {
    if (word[j] === 'a') {
      numberOfAsInThisWord++;
    }
  }
  numberOfAs = numberOfAs + numberOfAsInThisWord;
}

// Reduce Example
const accumulate = (sum, currentValue) => sum + currentValue;
const reducedSum = sampleNumbers.reduce(accumulate, 0)
console.log(reducedSum)


// Map Example
const double = (num) => num * 2
const doubled = sampleNumbers.map(double);
console.log(doubled);



// return true if num is even, false if odd
const isEven = (num) => num % 2 === 0
// const evens = sampleNumbers.filter(isEven);

// hard-coded
const evens = [];
for (let i = 0; i < sampleNumbers.length; i++) {
  if (isEven(sampleNumbers[i])) {
    evens.push(sampleNumbers[i]);
  }
}

// Filter is an "abstraction" that makes our code more readable
const filter = (arr, test) => {
  const filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (test(arr[i])) {
      filtered.push(arr[i])
    }
  }
  return filtered;
}

filter(sampleNumbers, isEven)

console.log(evens);

/* 
What makes these functions "higher-order"?
-> they all accept a callback function that is invoked on every value in the given array

arr.sort(compare) - sorts an array's contents "in place" (it mutates the array)
arr.filter(test) - returns a new array with the elements that pass a conditional test
arr.map(transform) - transforms each item in an array and gives you a new array of the same length with the results
arr.reduce(accumulate, initialValue) - Combines all elements of an array into a single value
arr.forEach(callback) - invokes callback on every value in the array. use when callback causes side-effects (e.g. mutating the values of an array, printing to the console)
*/

/* -------------------------------------------- */
/* --------------forEach PROBLEMS-------------- */
/* -------------------------------------------- */


// Problem 1
const printAllNumbers = (numbers) => {
  // first define a callback to handle one value
  const printNumber = (num) => console.log(num);

  // then invoke the HOM with that callback
  numbers.forEach(printNumber);

  // or write it in one line
  numbers.forEach((num) => console.log(num))
};

printAllNumbers(sampleNumbers);

// Problem 2
const printProductNames = (products) => {
  // first define a callback to handle one value
  const printProduct = (product) => console.log(product.name)

  // then invoke the HOM with that callback
  products.forEach(printProduct);
};

printProductNames(sampleProducts)

/* -------------------------------------------- */
/* ----------------map PROBLEMS---------------- */
/* -------------------------------------------- */

// Problem 3
const doubleNumbers = (numbers) => {
  // first define a callback to handle one value
  const double = (number) => number * 2
  // then invoke the HOM with that callback
  const doubled = numbers.map(double)
  return doubled;
};

// Problem 4
const getProductPrices = (products) => {
  // first define a callback to handle one value
  const getPrice = (product) => {
    return product.price;
  }
  // then invoke map with getPrice
  const prices = products.map(getPrice);
  return prices;
};

console.log(getProductPrices(sampleProducts))

/* -------------------------------------------- */
/* ---------------filter PROBLEMS-------------- */
/* -------------------------------------------- */

// Problem 5
const getNumbersOver50 = (numbers) => {

};

// Problem 6
const getInStockProducts = (products) => {

};

/* -------------------------------------------- */
/* ---------------reduce PROBLEMS-------------- */
/* -------------------------------------------- */

// Problem 7
const sumAllNumbers = (numbers) => {

};

// Problem 8
const getTotalPrice = (products) => {

};

/* -------------------------------------------- */
/* ----------------sort PROBLEMS--------------- */
/* -------------------------------------------- */

// Problem 9
const sortNumbersAscending = (numbers) => {

};

// Problem 10
const sortProductsByPriceAscending = (products) => {

};
