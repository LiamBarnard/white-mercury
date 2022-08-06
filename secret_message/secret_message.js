let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];


console.log(secretMessage.length);
const removeLast = secretMessage.pop();
console.log(secretMessage.length);

const addStringA = secretMessage.push('to');
const addStringB = secretMessage.push('Program');

addStringA;
addStringB;
secretMessage[7] = 'right';

const removeFirst = arr => {
  arr.shift()
}
removeFirst(secretMessage);


const addFirst = (arr, addition) => {
  arr.unshift(addition)
}
addFirst(secretMessage, 'Programming');

secretMessage.splice(6, 5, 'know,');
console.log(secretMessage.join(' '));
