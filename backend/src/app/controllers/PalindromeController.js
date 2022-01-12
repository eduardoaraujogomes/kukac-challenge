const palindrome = require('../services/PalindromeService.js');

class PalindromeController {
  show(request, response) {
    const { initialValue, finalValue } = request.query;

    if (+initialValue <= 10) {
      return response.status(400).json({ error: 'Valor inicial tem que ser maior que 10' });
    }
    return response.json(palindrome(+initialValue, +finalValue));
  }

}

module.exports = new PalindromeController();

