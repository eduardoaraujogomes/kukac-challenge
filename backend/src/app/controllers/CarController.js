const { Car } = require('../services/CarService.ts');
const { DATABASE } = require('../../mocks/database.js');


class CarController {
  store(request, response) {
    const { model, year, brand, doors } = request.body;

    if (!model || !year || !brand || !doors) {
      return response.status(400).json({ error: 'É preciso preencher todos os campos' });
    }

    if (typeof model !== 'string' || typeof brand !== 'string') {
      return response.status(400).json({ error: 'Os campos model e brand devem ser do tipo string' });
    }

    if (typeof year !== 'number' || typeof doors !== 'number') {
      return response.status(400).json({ error: 'Os campos year e doors devem ser do tipo number' });
    }

    if (![2, 4].includes(doors)) {
      return response.status(400).json({ error: 'Só é possível escolher 2 ou 4 portas' });
    }

    DATABASE.cars.push(new Car(
      model,
      year,
      brand,
      doors
    ));
    return response.json(DATABASE.cars);
  }
  show(request, response) {
    return response.json(DATABASE.cars);
  }

}



module.exports = new CarController();
