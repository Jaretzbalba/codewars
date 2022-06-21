// 7 kyu: Tidy Number (Special Numbers Series #9)
// Definition
// A Tidy number is a number whose digits are in non-decreasing order.

// Task
// Given a number, Find if it is Tidy or not .

function tidyNumber(n) {
  //create the sorted number by spreading number into array and sorting it
  //compare original value to that new number
  //if the values are equal return true if not return false
  let sortedNum = Number([...n.toString()].sort((a, b) => a - b).join(''));
  return sortedNum === n ? true : false;
}

// 6 kyu: Fibonacci, Tribonacci and friends
// If you have completed the Tribonacci sequence kata, you would know by now that mister Fibonacci has at least a bigger brother. If not, give it a quick look to get how things work.

// Well, time to expand the family a little more: think of a Quadribonacci starting with a signature of 4 elements and each following element is the sum of the 4 previous, a Pentabonacci (well Cinquebonacci would probably sound a bit more italian, but it would also sound really awful) with a signature of 5 elements and each following element is the sum of the 5 previous, and so on.

// Well, guess what? You have to build a Xbonacci function that takes a signature of X elements - and remember each next element is the sum of the last X elements - and returns the first n elements of the so seeded sequence.

// xbonacci {1,1,1,1} 10 = {1,1,1,1,4,7,13,25,49,94}
// xbonacci {0,0,0,0,1} 10 = {0,0,0,0,1,1,2,4,8,16}
// xbonacci {1,0,0,0,0,0,1} 10 = {1,0,0,0,0,0,1,2,3,6}
// xbonacci {1,1} produces the Fibonacci sequence

function Xbonacci(signature, n) {
  //set variable to length of signature array
  //set variable to n - length of signature
  //create a for loop that goes till m
  //for each loop slice the array from (i,i+)
  //push that value to the signature array
  //return signature sliced from 0 to n
  let m = n - sigLength;
  for (let i = 0; i < m; i++) {
    signature.push(
      signature.slice(i, i + sigLength).reduce((a, b) => a + b, 0)
    );
  }
  return signature.slice(0, n);
}
