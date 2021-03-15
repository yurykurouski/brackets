module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false
  }

  let stack = [],
    openBrackets = '([{',
    closeBrackets = ')]}';

  let state = true

  const strArr = str.split('')

  strArr.forEach(el => {
    if (openBrackets.includes(el)) {
      let i = openBrackets.indexOf(el);
      stack.push(closeBrackets[i]);
    }
    if (closeBrackets.includes(el) && el != stack.pop()) {
      state = false
    }
  });

  return state;
}