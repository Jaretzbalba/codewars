
// 8 kyu: Calculate BMI
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
    let bmiCalc = weight/(height**2);
    if(bmiCalc <= 18.5) {
      return "Underweight"
    } else if (bmiCalc <= 25) {
      return "Normal"
    } else if (bmiCalc <= 30) {
      return "Overweight"
    } else {
      return "Obese"
    }
}

// 8 kyu: DNA to RNA Conversion
// Create a function which translates a given DNA string into RNA.

function DNAtoRNA(dna) {
    return dna.split('').map(letter => letter.replace('T','U')).join('')
}

// 8 kyu: Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash (words) {
    return words.join(' ')
};

// 8 kyu: Function 3 - multiplying two numbers
// Implement a function which multiplies two numbers.

const multiply = (n1,n2) => n1 * n2

// 8 kyu: How good are you really?
// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
    let classSize = classPoints.length + 1
    const classAvg = (classPoints.reduce((a,b) => a+b,yourPoints))/classSize
    return (yourPoints >= classAvg) ? true : false
}
  
