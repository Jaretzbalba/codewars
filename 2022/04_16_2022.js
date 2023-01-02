
// 8 kyu: Sum without highest and lowest number
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

function sumArray(array) {
    if (array == null || array.length === 0) {
      return 0
    } else {
      let sortedArr = array.sort((a,b) => a - b)
      sortedArr.shift()
      sortedArr.pop()
      return sortedArr.reduce((a,b) => a + b,0)
    } 
}

// 8 kyu: Volume of a Cuboid
// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height
    }
}

// 8 kyu: Thinkful - Logic Drills: Traffic light
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

function updateLight(current) {
    switch(current) {
        case 'green':
        return 'yellow'
        case 'yellow':
        return 'red'
        case 'red':
        return 'green'
    }
}


