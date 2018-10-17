// Ex 1 | make flatten() -> array of arrays -> array with all elements of arrays

const flatten = (arrayOfArrays) => arrayOfArrays.reduce((a,b) => a.concat(b))

flatten([[1,2],[3,4],[5,6]])
// -> [ 1, 2, 3, 4, 5, 6 ]
