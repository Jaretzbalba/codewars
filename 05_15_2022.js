//8 kyu: A wolf in sheep's clothing
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

function warnTheSheep(queue) {
  let reverseQueue = queue.reverse();
  console.log(reverseQueue);
  for (let i = 0; i < queue.length; i++) {
    if (reverseQueue[i] === 'wolf' && i === 0) {
      return 'Pls go away and stop eating my sheep';
    } else if (reverseQueue[i] === 'wolf') {
      return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`;
    }
  }
}

// 8 kyu: Swap Values
// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.

// Can you figure out what's wrong here?

function swapValues(arr) {
  let t = arr[0];
  arr[0] = arr[1];
  arr[1] = t;
}

// 8 kyu: Merge two sorted arrays into one
// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

function mergeArrays(arr1, arr2) {
  return arr1
    .concat(arr2)
    .sort((a, b) => a - b)
    .filter((e, i, a) => e !== a[i + 1]);
}
