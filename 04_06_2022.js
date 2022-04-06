
// 8 kyu: Jenny's secret message
// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

const greet = name => name === "Johnny" ? "Hello, my love!" :"Hello, " + name + "!"

// 8 kyu: MakeUpperCase
// Write a function which converts the input string to uppercase.

function makeUpperCase(str) {
    return str.toUpperCase()
}

// 8 kyu: Calculate average
// Write a function which calculates the average of the numbers in a given list.

function find_average(array) {
    if(array.length === 0) {
        return 0
    } else {
        return (array.reduce((a,b) => a+b, 0))/array.length
     }
}

// 8 kyu: Beginner Series #1 School Paperwork
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
    return (n < 0 || m < 0 ? 0 : m * n)
}

// 8 kyu: Reversed sequence
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let arr = [];
    let i = n;
    while (i >= 1){
      arr.push(i)
      i--
    } return arr
};

// 8 kyu: Opposites Attract
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
    return ((flower1 % 2 === 0 && flower2 % 2 !== 0) ||
            (flower2 % 2 === 0 && flower1 % 2 !== 0)) ? true : false
}

//OR

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}



