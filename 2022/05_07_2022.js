// 8 kyu: Well of Ideas - Easy Version
// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x) {
  let bad = 0;
  let good = 0;
  x.forEach(a => (a === 'good' ? good++ : bad++));
  if (good === 1 || good === 2) {
    return 'Publish!';
  } else if (good > 2) {
    return 'I smell a series!';
  } else if (good === 0) {
    return 'Fail!';
  }
}
