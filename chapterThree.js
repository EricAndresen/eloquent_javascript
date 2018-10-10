// Ex 1 | write sum(array) and range(start, end) functions to test sum(range(1,5))

// would be more interesting to write a recursive version of this
const sum = (array) => {
    let total = 0;
    for (i of array) {
        total += i
    }
    return total
}

const range = (startValue, endValue, step = 1) => {
    let result = [];
    // check if ascending or descending
    if ((startValue < endValue) & (Math.abs(step) == step)) {
        for (let i = startValue; i < endValue; i += step ){
            result.push(i)
        }
        return result;
    } else if ((startValue > endValue) & (Math.abs(step) != step)) {
        for (let i = startValue; i > endValue; i += step ){
            result.push(i)
        }
        return result;
    } else {
        console.log("Error! Your Start and End values don't match your steps. It looks like you're stepping the wrong direction.")
    }
    
}

// Tests
// console.log(sum([1,1,1,1]))
// console.log(range(2,15, 2))
// console.log(sum(range(1,5)))
console.log(range(5,2,-1))
// => [5,4,3,2,1]
console.log(range(1,10,2))
// => [1,3,5,7,9]
console.log(range(1,10,-2))
// => Error!
