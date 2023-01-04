// 7 kyu: Get key/value pairs as arrays
// Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

// Example:

// keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

function keysAndValues(data) {
  let keys = [],
    values = [];
  for (const key in data) {
    keys.push(key);
    values.push(data[key]);
  }
  return [keys, values];
}

//OR

function keysAndValues(data) {
  return [Object.keys(data), Object.values(data)];
}

// 6 kyu: Javascript filter - 3
// Your friend saw the great work you did with keeping your user-names at bay in

// http://www.codewars.com/dojo/katas/525d9b1a037b7a9da7000905

// now he'd like you to do (nearly) the same thing for his website, but as always, the devil is in the details.

// He has troubles with users ending or starting in a ".", and his user-array is a flat array of user-email-pairs, like so:

// [ "foo", "foo@bar.com", "bar", "bar@foo.com", ".foo", "food@bar.com" ]
// He is only interested in e-mailing the users and ask them to sign up again, so no need to keep the user-name, only e-mail addresses for the user-names that start or end with a "." should be returned. For the above array, the correct return-array would be

// [ "food@bar.com" ]
// You have to use the filter-method of Javascript, which returns each element of the array for which the filter-method returns true. The second argument gives the index you're looking at and the third argument is the array itself:

function searchNames(logins) {
  //filter emails that includes '@' && (a[i-1][0] === '0' || a[i-1][-1] === '0')
  return logins.filter((e, i, a) => {
    return e.includes('@') && (a[i - 1][0] === '.' || a[i - 1][a[i - 1].length - 1] === '.');
  });
}
