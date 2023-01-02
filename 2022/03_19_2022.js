
// 7 kyu: Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
    let numArr = numbers.split(' ');
     let minNum = Math.min(...numArr);
     let maxNum = Math.max(...numArr);
     return `${maxNum} ${minNum}`
}

// 7 kyu: Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s){
    let midIndex = (s.length)/2;
    console.log(`${s.charAt(midIndex-1)}${s.charAt(midIndex)}`)
    if(s.length % 2 === 0) {
      return `${s.charAt(midIndex-1)}${s.charAt(midIndex)}`
    } else {
    return s.charAt(midIndex)
    }
}
