
// 7 kyu: Mumbling
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    return s.split('').map((letter,index) => letter.toUpperCase() + letter.toLowerCase().repeat(index)).join('-')
}

