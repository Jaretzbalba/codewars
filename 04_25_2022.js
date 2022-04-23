
// 8 kyu: Grasshopper - Messi goals function
// Complete the function to return his total number of goals in all three leagues.

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
}

// 8 kyu: Expressions Matter
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained

function expressionMatter(a, b, c) {
    return Math.max(...[a * (b + c), a * b * c, (a + b) * c, a * (b + c), (a + b) * c, a + b + c])
}