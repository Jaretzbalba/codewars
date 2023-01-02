
// 8 kyu: You Can't Code Under Pressure #1
// Code as fast as you can! You need to double the integer and return it.

function doubleInteger(i) {
    return i * 2;
}

// 7 kyu: List Filtering
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(a => typeof a === 'number')
}

