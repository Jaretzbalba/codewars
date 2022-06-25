// 7 kyu: Array Leaders (Array Series #3)
// An element is leader if it is greater than The Sum all the elements to its right side.

// Given an array/list [] of integers , Find all the LEADERS in the array.

function arrayLeaders(numbers) {
  //use filter method
  //use a callback function to test on each element
  //initialize variable for each iteration that get all elements to the right of current element
  //reduce those elements
  //return true if current element > reduced value else return false
  return numbers.filter((e, i, a) => {
    let m = a.slice(i + 1).reduce((a, b) => a + b, 0);
    console.log(m);
    return e > m ? true : false;
  });
}
