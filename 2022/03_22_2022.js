
// 8 kyu: Counting sheep
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

function countSheeps(arrayOfSheep) {
    let numSheep = 0;
    arrayOfSheep.forEach(boo => boo ? numSheep++: numSheep )
    return numSheep
}

// 8 kyu: Function 1 - hello world

const greet = () => 'hello world!'

// 8 kyu: Keep Hydrated!
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
    return Math.floor(time*0.5)
}

// 8 kyu: Century From Year
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

function century(year) {
    if (year % 1000 === 0) {
      return year / 100
    } else {
      return Math.ceil(year/100)
    }
} 

