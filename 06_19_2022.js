// 7 kyu: Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?
// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// your function should return true.

function isRubyComing(list) {
  //use find method if element.language === "Ruby"
  return list.find(e => e.language === 'Ruby') ? true : false;
}

//OR

function isRubyComing(list) {
  //ise some method to see if any element passes test condition
  //return true if found else return false
  return list.some(e => e.language === 'Ruby');
}
