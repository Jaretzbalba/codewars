// 7 kyu: Minimize Sum Of Array (Array Series #1)
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

const minSum = arr =>
  // sort array from min to max
  // reduce array and multiply each current val by the last value in the array with .pop method
  arr.sort((a, b) => a - b).reduce((pre, val) => pre + val * arr.pop(), 0);

// 7 kyu: Product Of Maximums Of Array (Array Series #2)
//   Given an array/list [] of integers , Find the product of the k maximal numbers.

function maxProduct(numbers, size) {
  //sort array from maximum to min
  //slice array from 0 to size value
  //
  let sortedArr = numbers.sort((a, b) => b - a);
  let slicedArr = sortedArr.slice(0, size);
  return slicedArr.reduce((a, b) => a * b);
}
