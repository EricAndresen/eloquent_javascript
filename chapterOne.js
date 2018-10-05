// Exercise 1 | Make triangle

const makeLine = (length) => {
    let line = '';
    for (counter = 0; counter < length; counter += 1) {
        line += '#'
    }
    return line
}

const makeTriangle = (size) => {
    for (row = 0; row < size; row += 1) {
        console.log(makeLine(row + 1))
    }
}

// makeTriangle(7)

// Ex. 2 | FizzBuzz

const ifDivByN = (target, divisor, returnString) => {
    if (target % divisor == 0) {
        return returnString
    } else {
        return ""
    }
}

const fizzBuzz = (len) => {
    for (num = 0; num <= len; num += 1) {
        const val = ifDivByN(num, 3, "Fizz") + ifDivByN(num, 5, "Buzz")
        // if no result return num, else return the string
        console.log(val ? val : num)
    }
}

// fizzBuzz(15)

// Ex.3 | Chessboard
// make a grid of alternating "#" of a given size

const grid = (size = 8) => {
    // make row size wide
    const row = '# '.repeat(size)
    // repeat size times
    for (num = 0; num < size; num += 1) {
        const padding = (num % 2 == 0) ? '' : ' '
        console.log( padding + row )
    }
}

// grid(16)
  
