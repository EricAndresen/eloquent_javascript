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
    for (let i = startValue; i < endValue; i += step ){
        result.push(i)
    }
    return result;
}

// Tests
// console.log(sum([1,1,1,1]))
// console.log(range(2,15, 2))
// console.log(sum(range(1,5)))