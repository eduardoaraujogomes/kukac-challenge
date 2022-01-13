const isPalindromo = (number) => {
  const reversedNumber = number.toString().split('').reverse().join('');
  return reversedNumber == number;
};

const palindromoList = (initial, final) => {
  const valuesList = [];
  for (let index = initial; index <= final; index += 1) {
    if (isPalindromo(index)) {
      valuesList.push(index);
    }
  }
  return valuesList;
};


module.exports = { palindromoList, isPalindromo };
