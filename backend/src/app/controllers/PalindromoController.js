const { palindromoList } = require('../services/PalindromoService.js');

class PalindromoController {
  show(request, response) {
    const { initialValue, finalValue } = request.query;

    if (+initialValue > +finalValue) {
      return response.status(400).json({
        error: 'O valor inicial deve ser menor que o valor final.'
      });
    }

    if (+initialValue <= 10) {
      return response.status(400).json({ error: 'Valor inicial tem que ser maior que 10' });
    }
    return response.json(palindromoList(+initialValue, +finalValue));
  }

}

module.exports = new PalindromoController();

