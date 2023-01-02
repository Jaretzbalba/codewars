
// 7 kyu: Remove anchor from URL
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url){
    let anchorIndex = url.indexOf('#')
      return anchorIndex === -1 ? url : url.slice(0,anchorIndex)
}

// 7 kyu: Find the capitals
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

var capitals = function (word) {
    let capIndex = [];
    let capWord = word.toUpperCase();
    for(let i = 0; i < word.length; i++) {
      if(word[i] === capWord[i]) {
          capIndex.push(i)
      }
    }
    return capIndex
};