// min 2-3 tests for every function 

const _unique = (list) => {

    list = list.filter((x, i, a) => a.indexOf(x) == i) // index of znajduje pierwszy index

    return list
}

const _isOdd = (value) => {
    // if value is odd then true
    return !(value % 2)
}

const _isEmail = (str) => {
    // *if str is email-like then true 
    // find regexp on stackoverflow :)
}

const _mapForArray = (_array, callback) => {
    // use for/while loop
    // same functionalty as map
    for (let i = 0; i < _array.length; i++) {
        callback()
    }
}

const _mapForObject = (_object, callback) => {
    // *use for/while loop
    // same functionalty as map but for object values
    const arr = Object.values(_object)
    for (let i = 0; i < arr.length; i++) {
        callback()
    }
}



console.log('1', _isOdd(2), "2", _isOdd(4), '3', _isOdd(23))

_mapForArray([1, 2, 3, 4], () => console.log('dziala'))

_mapForObject({ name: 'szymon', age: 23, height: 178 }, () => console.log('works'))

console.log(_unique([1, 1, 1, 2, 3, 1, 2, 3, 4, 4, 5]))
