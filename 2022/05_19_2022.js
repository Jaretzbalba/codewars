// 6 kyu: Lottery Ticket
// Time to win the lottery!

// Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.

// Example ticket:

// [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
// To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.

// Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.

// All inputs will be in the correct format. Strings on tickets are not always the same length.

function bingo(ticket, win) {
  //initalize win counter
  //map through array and split first element by ('') and then map through that array
  //if the current element char code === winning code then increment win counter
  //if win counter >= win display winner if not display loser
  let winCount = 0;
  ticket.map(a =>
    a[0].split('').map(b => {
      if (b.charCodeAt(0) == a[1]) {
        winCount++;
      }
    })
  );
  return winCount >= win ? 'Winner!' : 'Loser!';
}

// 6 kyu: English beggars
// Born a misinterpretation of this kata, your task here is pretty simple: given an array of values and an amount of beggars, you are supposed to return an array with the sum of what each beggar brings home, assuming they all take regular turns, from the first to the last.

// For example: [1,2,3,4,5] for 2 beggars will return a result of [9,6], as the first one takes [1,3,5], the second collects [2,4].

// The same array with 3 beggars would have in turn have produced a better out come for the second beggar: [5,7,3], as they will respectively take [1,4], [2,5] and [3].

// Also note that not all beggars have to take the same amount of "offers", meaning that the length of the array is not necessarily a multiple of n; length can be even shorter, in which case the last beggars will of course take nothing (0).

// Note: in case you don't get why this kata is about English beggars, then you are not familiar on how religiously queues are taken in the kingdom ;)

// Note 2: do not modify the input array.

function beggars(values, n) {
  let take = Array(n).fill(0);

  for (let i = 0; i < values.length; i++) take[i % n] += values[i];

  return take;
}

//OR

function beggars(values, n) {
  var outputValues = [];
  for (var i = 0; i < n; i++) {
    var sum = 0;
    for (var j = i; j < values.length; j += n) {
      sum += values[j];
    }
    outputValues.push(sum);
  }
  return outputValues;
}
