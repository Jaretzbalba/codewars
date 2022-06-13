// 6 kyu: Mix Fruit Juice
// Jumbo Juice makes a fresh juice out of fruits of your choice.Jumbo Juice charges $5 for regular fruits and $7 for special ones. Regular fruits are Banana, Orange, Apple, Lemon and Grapes. Special ones are Avocado, Strawberry and Mango. Others fruits that are not listed are also available upon request. Those extra special fruits cost $9 per each. There is no limit on how many fruits she/he picks.The price of a cup of juice is the mean of price of chosen fruits. In case of decimal number (ex. $5.99), output should be the nearest integer (use the standard rounding function of your language of choice).

// Input
// The function will receive an array of strings, each with the name of a fruit. The recognition of names should be case insensitive. There is no case of an empty array input.

function mixFruit(arr) {
  //initialize regular/special fruit arrays
  //iterate through input array of fruit and check ithe fruit is in either of the regular /special fruit array
  //if regular return 5
  //if special return 7
  //if neither return 9
  //reduce array and divide by length of array to get the mean and round to nearest interger
  let regularFruit = ['banana', 'orange', 'apple', 'lemon', 'grapes'];
  let specialFruit = ['avocado', 'strawberry', 'mango'];
  let costArray = arr.map(e => {
    if (regularFruit.includes(e.toLowerCase())) {
      return 5;
    } else if (specialFruit.includes(e.toLowerCase())) {
      return 7;
    } else {
      return 9;
    }
  });
  console.log(costArray);
  return Math.round(costArray.reduce((a, b) => a + b, 0) / arr.length);
}

//OR

function mixFruit(arr) {
  //create object of known prices
  //reduce input array of fruit
  //current value will be taken from prices object
  //if fruit property exists return the price OR return 9 if not present
  //divide by the length of the arr and round to the nearest interger
  var prices = {
    banana: 5,
    orange: 5,
    apple: 5,
    lemon: 5,
    grapes: 5,
    avocado: 7,
    strawberry: 7,
    mango: 7,
  };
  return Math.round(
    arr.reduce((a, b) => (a += prices[b.toLowerCase()] || 9), 0) / arr.length
  );
}

// 6 kyu: Simple Encryption #1 - Alternating Split
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
  //if input text returns falsey or n <= 0 return text
  //while loop with n--
  //initialize ans variable
  //for loop for odd index that adds the value to ans variable
  //then another for loop for even index that adds the value to ans variable
  //let text = ans and return text
  console.log(text, n);
  if (!text || n <= 0) return text;
  while (n--) {
    let ans = '';
    for (let i = 1; i < text.length; i += 2) {
      ans += text[i];
    }
    for (let i = 0; i < text.length; i += 2) {
      ans += text[i];
    }
    text = ans;
  }
  return text;
}

function decrypt(encryptedText, n) {
  //if input encryptedText returns falsey or n <= 0 return encryptedText
  //while loop with n--
  //initialize ans variable with array of empty indexes = to input encryptedText
  //initialize j variable as an incrementer
  //for loop for odd index that adds the value from encryptedText to ans array
  //then another for loop for even index that adds the value from encryptedText to ans array
  //let encryptedText = ans.join('') and return encryptedText
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}
