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
// console.log(range(5,2,-1))
// => [5,4,3,2,1]
// console.log(range(1,10,2))
// => [1,3,5,7,9]
// console.log(range(1,10,-2))
// => Error!

// # Ex 2 | Make reverse(array) -> new array in reverse order and reverseInPlace(array) that mutates array

const reverse = (array) => {
    let newArray = [];
    for (let i of array) {
        newArray.unshift(i)
    }
    return newArray
}

// console.log(reverse([1,2,3]))
// // -> [3,2,1]
// console.log(reverse(["race", "car"]))
// // -> ["car", "race"]

const reverseInPlace = (array) => {
    for (const [index, value] of reverse(array).entries()){
        array[index] = value
    }  
};

// let testList1 = [1,2,3]
// reverseInPlace(testList1);
// console.log(testList1)

// Ex 3 | Make arrayToList(array) -> Linked List and listToArray(linkedListObject) -> array

// linked list are really just a recursive implementation of 
// List = {
//     value: 1,
//     pointer: null,
// }

const arrayToList = (array, index) =>{
    if (!array[index]) {
        return null
    } else {
        return {value: array[index], 
                pointer: arrayToList(array, index + 1)}    
    } 
}

// console.log(arrayToList([1,2,3], 0))
/* -> {
    value: 1,
    pointer: {
        value: 2,
        pointer: {
            value 3,
            pointer: null,
        }
    }
}
*/

const listToArray = (linkedListObject) => {
    if (!linkedListObject){
        return []
    } else {
        const nextStep = listToArray(linkedListObject.pointer)
        return [linkedListObject.value, ...nextStep]
    }
}

const list1 = {
        value: 1,
        pointer: {
            value: 2,
            pointer: {
                value: 3,
                pointer: null,
            }
        }
    }
// console.log(listToArray())
// -> [1,2,3]

// Make prepend(element, linkedList) -> listObject with element at front

const prepend = (element, linkedListObject) => (
    {
        value: element,
        pointer: linkedListObject
    }
)

// console.log(prepend(0, list1))
/* -> {
    value: 0,
    pointer: {
        value: 1,
        pointer: {
            value: 2,
            pointer: {
                value: 3,
                pointer: null,
            }
        }
    }
}
*/

// Make nth(index, linkedList) -> elements at index or undefined

const nth = (index, linkedList, startPoint = 0) => {
    if (startPoint === index) {
        return linkedList.value
    } else if (linkedList === null){
        return undefined
    } else {
        return nth(index, linkedList.pointer, startPoint + 1) || undefined
    }
}

console.log(list1)
console.log(nth(0, list1))
// -> 1