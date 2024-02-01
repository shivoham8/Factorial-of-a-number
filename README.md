# Calculating Factorial of a number

The provided JavaScript code calculates the factorial of a given number using two different methods: array.reduce and for-loops. Here's a breakdown of each part of the code:

1. **Using array.reduce:**
   - An array `arr` is initialized with the value `[1]`.
   - The user is prompted to enter a number, and a for-loop populates the array with numbers from 2 to the entered number.
   - The `arr.reduce` method is then used with a callback function `red` to calculate the factorial by multiplying all elements of the array.
   - The result is displayed using `alert`.
  
```javascript
// Using array.reduce
let arr = [1];
let number = prompt("Calculate the factorial of: ");

for(let i = 2; i <= number; i++) {
    arr.push(i);
}

// console.log(arr);

const red = (a,b) => {
    return a*b;
}

alert("The factorial of " + number + " is " + arr.reduce(red))
```

2. **Using for-loops:**
   - A variable `factorial` is initialized with the value `1`.
   - The user is prompted to enter another number, and a for-loop calculates the factorial by multiplying `factorial` with each number from 1 to the entered number.
   - The result is displayed using `alert`.

```javascript

// Using for-loops
let factorial = 1;
let num = prompt("Calculate the factorial of: ");

for(let i = 1; i <= num; i++) {
    factorial = factorial * i;
}

alert("The factorial of " + num + " is " + factorial);
```

Note: The code uses the `prompt` function to take user input and the `alert` function to display the results.

If you have any specific questions or if there's anything else you'd like to know or modify in the code, feel free to ask!
