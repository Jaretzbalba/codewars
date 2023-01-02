
// 7 kyu: Number of People in the Bus
// You are provided with a list (or array) of integer pairs. Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

var number = function(busStops){
    let numOfPeople = 0;
    busStops.map( a => numOfPeople = numOfPeople + a[0] - a[1])
    return numOfPeople
}

//OR

const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);

// 7 kyu: Find the divisors!
// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime'
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
    let array = [];
    for(let i = 2; i < integer; i++) {
      if(integer % i === 0) {
        array.push(i)
      } 
    } 
    return array[0] === undefined ? `${integer} is prime` : array 
}

//OR

function divisors(integer) {
    let array = [];
    for(let i = 2; i < integer; i++) {
      if(integer % i === 0) {
        array.push(i)
      } 
    } 
    return array.length ? array : `${integer} is prime`
}
