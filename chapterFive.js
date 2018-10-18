require('./scripts.js');

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

// console.log(every([1,2,3,4], x => x < 5))
// -> true
// console.log(every([1,2,3,14], x => x < 5))
// -> false

// Ex 4 | make dominantDirection() -> string -> direction of most of the writing
// NOTE: uses objects SCRIPTS with language data related to unicode (see import above)

function dominantDirection(string){
    let directionCounts = {}
    for (const c  of string){
        const direction = getDirection(c)
        
        // increment value
        if (directionCounts[direction]){
            directionCounts[direction] += 1;
        } else if (direction != null) {
            directionCounts[direction] = 1;
        }
    }
    return findMax(directionCounts)
}

// Helper Functions
const getDirection = (char) => {
    for (const s of SCRIPTS) {
        if (in_range(char.codePointAt(0), s.ranges)){
            return s.direction;
        }
    }
    return null
}

const findMax = (dictionary) => {
    let dominantEntry = 'No entry';
    let highestValue = 0
    for (const e of Object.entries(dictionary)){
        const occurences = e[1];
        const entry = e[0];
        if (occurences > highestValue) {
            dominantEntry = entry
        }
    }
    return dominantEntry
}

function in_range(charCode, listOfRanges){
    // check that code falls in one of the ranges 
    const bool = listOfRanges.some( a => (charCode > a[0] && charCode < a[1]))
    return bool
}

// Tests
console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection(" hey مساء الخير"));
// → rtl