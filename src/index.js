module.exports = function check(str, bracketsConfig) {

  const arrOpen = ['(', '{', '[', '1', '3', '5']; 
  const arrDouble = ['|', '7', '8'];
  const objPairs = {
    [')']: '(',
    ['}']: '{',
    [']']: '[',
    ['|']: '|',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
    ['7']: '7',
    ['8']: '8',
  };

  let stack = [];
  for (let i = 0; i < str.length; i++) {
    let curSymbol = str[i];
    let topElem = stack[stack.length - 1];
    
    if (arrOpen.includes(curSymbol)) {
      stack.push(curSymbol);
    } else if((arrDouble.includes(curSymbol)) && objPairs[curSymbol] !== topElem) {
        stack.push(curSymbol);
      } else {
      if (stack.length === 0) {
        return false;
      }

      if (objPairs[curSymbol] === topElem)  {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
