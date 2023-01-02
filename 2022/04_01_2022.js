
//7 kyu: Growth of a Population
// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0) 


function nbYear(p0, percent, aug, p) {
    let currentp = p0;
    let y = 0;
    while (currentp < p) {
      currentp += Math.floor(currentp * (percent/100) + aug)
      y++
    } return y
}

// 8 kyu: Fake Binary
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x){
    return x.split('').map(a => a < 5 ? a = 0 : a = 1).join('')
}