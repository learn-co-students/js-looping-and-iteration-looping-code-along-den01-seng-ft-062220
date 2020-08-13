function writeCards(namesArray, event) {
  const thankYouArray = [];
  for (let i = 0; i < namesArray.length; i++) {
     thankYouArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
  };
  return thankYouArray;
};

function countDown(number) {
  while (number >= 0) {
    console.log(number);
    number--;
  };
};