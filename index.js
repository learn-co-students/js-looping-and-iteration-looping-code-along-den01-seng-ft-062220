// function writeCards(namesArray, eventName) {
//   for(let i = 0; i < namesArray.length; i++) {
//     namesArray[i] = (`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
//   }
//   return namesArray;
// }

function writeCards(namesArray, eventName) {
  return namesArray.map(name => {
    return `Thank you, ${name}, for the wonderful ${eventName} gift!`;
  });
}

function countDown(number) {
  while (number >= 0 ) {
    console.log(number);
    number--;
  }
}