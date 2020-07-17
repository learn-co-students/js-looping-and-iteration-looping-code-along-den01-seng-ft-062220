function writeCards(arrayOfNames, event) {
  let resultArray = [];
  for (let i = 0; i < arrayOfNames.length; i++) {
    resultArray.push(`Thank you, ${arrayOfNames[i]}, for the wonderful ${event} gift!`);
  };
  return resultArray;
}

function countDown(int){
  while (int >= 0){
    console.log(int);
    int--;
  }
}