module.exports = function check(str, bracketsConfig) {
  console.log('1=',str);
  const arrOpen = ["(","{","[","|"];
  const arrClose = [")","}","]","|"];
  console.log(arrOpen[0] === str[0]);
  
  if (str.length % 2 === 1) { return false}
 
  let arr = [];
  for ( elem of str) {
    //console.log(elem)
    if (elem === "(" && elem === "{" && elem === "[") { arr.push(elem)}
    if (elem === ")") {
      if (elem-1 === "(") { arr.pop()}
    }
    if (elem === "}") {
      if (elem-1 === "{") { arr.pop()}
    }
    if (elem === "]") {
      if (elem-1 === "[") { arr.pop()}
    }
  


  }
 if (arr.length === 0) {return true} 



}
