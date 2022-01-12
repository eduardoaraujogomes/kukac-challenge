const isPalindrome = (number) => {
  const reversedNumber = number.toString().split('').reverse().join('');
  return reversedNumber == number;
};

const palindromeList = (initial, final) => {
  const valuesList = [];
  for (let index = initial; index <= final; index += 1) {
    if (isPalindrome(index)) {
      valuesList.push(index);
    }
  }
  return valuesList;
};


module.exports = palindromeList;
