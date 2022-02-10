module.exports = function check(str, bracketsConfig) {
  console.log('1=',str);
  const arrOpen = ["(","{","[","|"];
  const arrClose = [")","}","]","|"];
  console.log(arrOpen[0] === str[0]);
  
  if (str.length % 2 === 1) { return false}





}
