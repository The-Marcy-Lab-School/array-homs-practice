## Array Method Practice Problems

### forEach Problems

**Problem 1**
Write a function called `printAllNumbers` that takes an array of numbers as input and prints each number to the console.

Example Usage:
```javascript
const numbers = [10, 25, 30, 45, 50];

printAllNumbers(numbers);
/* Expected Output:
10
25
30
45
50
*/
```

**Problem 2**
Write a function called `printProductNames` that takes an array of product objects as input and prints each product's name to the console.

Example Usage:
```javascript
const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Mouse', price: 25, inStock: true },
  { name: 'Keyboard', price: 75, inStock: false },
  { name: 'Monitor', price: 300, inStock: true }
];

printProductNames(products);
/* Expected Output:
Laptop
Mouse
Keyboard
Monitor
*/
```

### map Problems

**Problem 3**
Write a function called `doubleNumbers` that takes an array of numbers as input and returns a new array with each number doubled.

Example Usage:
```javascript
const numbers = [5, 10, 15, 20];

console.log(doubleNumbers(numbers));
// Expected Output: [10, 20, 30, 40]
```

**Problem 4**
Write a function called `getProductPrices` that takes an array of product objects as input and returns a new array containing just the price of each product.

Example Usage:
```javascript
const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Mouse', price: 25, inStock: true },
  { name: 'Keyboard', price: 75, inStock: false },
  { name: 'Monitor', price: 300, inStock: true }
];

console.log(getProductPrices(products));
// Expected Output: [999, 25, 75, 300]
```

### filter Problems

**Problem 5**
Write a function called `getNumbersOver50` that takes an array of numbers as input and returns a new array containing only the numbers that are greater than 50.

Example Usage:
```javascript
const numbers = [25, 60, 15, 80, 45, 100, 30];

console.log(getNumbersOver50(numbers));
// Expected Output: [60, 80, 100]
```

**Problem 6**
Write a function called `getInStockProducts` that takes an array of product objects as input and returns a new array containing only the products where `inStock` is `true`.

Example Usage:
```javascript
const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Mouse', price: 25, inStock: true },
  { name: 'Keyboard', price: 75, inStock: false },
  { name: 'Monitor', price: 300, inStock: true }
];

console.log(getInStockProducts(products));
/* Expected Output:
[
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Mouse', price: 25, inStock: true },
  { name: 'Monitor', price: 300, inStock: true }
]
*/
```

### reduce Problems

**Problem 7**
Write a function called `sumAllNumbers` that takes an array of numbers as input and returns the sum of all the numbers.

Example Usage:
```javascript
const numbers = [10, 20, 30, 40];

console.log(sumAllNumbers(numbers));
// Expected Output: 100
```

**Problem 8**
Write a function called `getTotalPrice` that takes an array of product objects as input and returns the sum of all product prices.

Example Usage:
```javascript
const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Mouse', price: 25, inStock: true },
  { name: 'Keyboard', price: 75, inStock: false },
  { name: 'Monitor', price: 300, inStock: true }
];

console.log(getTotalPrice(products));
// Expected Output: 1399
```

### sort Problems

**Problem 9**
Write a function called `sortNumbersAscending` that takes an array of numbers as input and sorts them from smallest to largest. This function should sort the array "in place" meaning it SHOULD mutate the array.

Example Usage:
```javascript
const numbers = [50, 10, 40, 20, 30];

sortNumbersAscending(numbers);
console.log(numbers);
// Expected Output: [10, 20, 30, 40, 50]
```

**Problem 10**
Write a function called `sortProductsByPriceAscending` that takes an array of product objects as input and sorts them by price from lowest to highest. This function should sort the array "in place" meaning it SHOULD mutate the array.

Example Usage:
```javascript
const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Mouse', price: 25, inStock: true },
  { name: 'Keyboard', price: 75, inStock: false },
  { name: 'Monitor', price: 300, inStock: true }
];

sortProductsByPriceAscending(products);
console.log(products);
/* Expected Output:
[
  { name: 'Mouse', price: 25, inStock: true },
  { name: 'Keyboard', price: 75, inStock: false },
  { name: 'Monitor', price: 300, inStock: true },
  { name: 'Laptop', price: 999, inStock: true }
]
*/
```
