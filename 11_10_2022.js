// 7 kyu: The highest profit wins!
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

// Examples (Input --> Output)
// [1,2,3,4,5] --> [1,5]
// [2334454,5] --> [5,2334454]
// [1]         --> [1,1]

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}

// 7 kyu: Remove the minimum
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples
// * Input: [1,2,3,4,5], output= [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  //use findIndex of Math.min of numbers array
  //slice a copy of the numbers array and set as result
  //splice from index and remove 1 element
  //return result array
  let result = numbers.slice();
  let index = result.findIndex(e => e == Math.min(...numbers));
  result.splice(index, 1);
  return result;
  throw 'TODO: removeSmallest';
}

// 7 kyu: Count the divisors of a number
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)

function getDivisorsCnt(n) {
  //initialize numOfDivisors
  //for loop n times and count how many times n % i === 0
  let numOfDivisors = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      numOfDivisors++;
    }
  }
  return numOfDivisors;
}
