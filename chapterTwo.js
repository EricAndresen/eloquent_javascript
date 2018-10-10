// Exercise 1 | Write a function min that takes two args and returns their minimum
const min = (num1, num2) => (num1 <= num2) ? num1 : num2;

// Tests
// console.log(min(2,3))
// console.log(min(1,10))
// console.log(min(10,1))
// console.log(min(10000,10))

// Ex. 2 | Define isEven as a recursive function. Take one integer parameter and returns a bool

// this if it's odd it's going to go for ever

const isEven = (num) => {
    if (num == 0){
        return true
    } else if (num == 1) {
        return false
    } else {
        // Absolute value prevents negative numbers from skipping the base case
        return isEven(Math.abs(num) - 2)
    }
}

// Tests
// console.log(isEven(50))
// console.log(isEven(75))
// // generates maximum call stack exceeded because it never hits the base case (starts below it). Fix using abs
// console.log(isEven(-101))

// Ex 3 | Write function countBs() that returns number of B's in a given string, then make a more general version of it called countChars(), then rewrite countB to using it.

const countBs = (str) => {
    let b = 0;
    for (n of str) {
        if (n == "B") {
            b++
        }
    }

    return b
}

// Test
// console.log(countBs("BaBsasBdfDBsB"))
// => 4

const countChars = (str, char) => {
    let charCount = 0;
    for (n of str){
        if (n === char){
            charCount++
        }
    }

    return charCount
}

console.log(countChars("BBBBBB", "B"))
// => 6
