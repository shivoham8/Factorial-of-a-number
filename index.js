// Using array.reduce
let arr = [1];
let number = prompt("Calculate the factorial of: ");

for(let i = 2; i <= num; i++) {
    arr.push(i);
}

// console.log(arr);

const red = (a,b) => {
    return a*b;
}

alert("The factorial of " + number + " is " + arr.reduce(red))

// Using for-loops
let factorial = 1;
let num = prompt("Calculate the factorial of: ");

for(let i = 1; i <= num; i++) {
    factorial = factorial * i;
}

alert("The factorial of " + num + " is " + factorial);
