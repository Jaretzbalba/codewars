
// 7 kyu: Is this a Triangle?
// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c)
{
   return a + b > c && a + c > b && c + b > a;

}

// 7 kyu: Friend or Foe?
// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

function friend(friends){
    return friends.filter(a => a.length === 4) 
}

// 8 kyu: Reversed Words
// Complete the solution so that it reverses all of the words within the string passed in.

const reverseWords = str => str.split(' ').reverse().join(' ')

// 8 kyu: Is he gonna survive?
// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

const hero = (bullets, dragons) => (bullets/dragons) >= 2 ? true : false


// 7 kyu: Find the next perfect square!
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

function findNextSquare(sq) {
    let sqrt = Math.sqrt(sq)
    if(sqrt % 1 === 0) {
      return Math.pow(++sqrt,2)
    } else {
      return -1
    }
}
