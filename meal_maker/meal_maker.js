let input = 'turpentine and turtles';
let whaleLetters = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < whaleLetters.length; j++) {
    if(input[i] === whaleLetters[j]) {
      resultArray.push(input[i]);
    }
  }
}

const resultString = resultArray.join('').toUpperCase();
console.log(resultString)