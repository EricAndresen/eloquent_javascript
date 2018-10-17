// Ex 1 | make flatten() -> array of arrays -> array with all elements of arrays

const flatten = (arrayOfArrays) => arrayOfArrays.reduce((a,b) => a.concat(b))

// flatten([[1,2],[3,4],[5,6]])
// -> [ 1, 2, 3, 4, 5, 6 ]

// Ex 2 | make loop() -> value -> test function (value -> Bool) -> update function -> body function 
// if testFunction(value) then body function(value) else update(value)

function loop(value, test, update, body) {
    if (!test(value)){
        return ;
    } else {
        body(value);
        loop(update(value), test, update, body);
    }
}

// loop(3, n => n > 0, n => n - 1, console.log);
// -> 3\n 2\n 1\n

// Ex 3 | Implement Array.every yourself

const every = (array, condition) => array.reduce((a,b) => a && condition(b), true);

console.log(every([1,2,3,4], x => x < 5))
// -> true
console.log(every([1,2,3,14], x => x < 5))
// -> false
