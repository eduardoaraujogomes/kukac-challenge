const { Motocycle } = require('../services/MotocycleService.ts');
const { DATABASE } = require('../../mocks/database.js');

class MotocycleController {
  store(request, response) {
    const { model, year, brand, passenger } = request.body;


    if (!model || !year || !brand || (!passenger && passenger !== 0)) {
      return response.status(400).json({ error: 'É preciso preencher todos os campos' });
    }

    if (typeof model !== 'string' || typeof brand !== 'string') {
      return response.status(400).json({ error: 'Os campos model e brand devem ser do tipo string' });
    }

    if (typeof year !== 'number' || typeof passenger !== 'number') {
      return response.status(400).json({ error: 'Os campos year e passenger devem ser do tipo number' });
    }


    if (![1, 2].includes(passenger)) {
      return response.status(400).json({ error: 'Só é possível escolher 1 ou 2 passageiros' });
    }


    DATABASE.motocycles.push(new Motocycle(
      model,
      year,
      brand,
      passenger
    ));
    return response.json(DATABASE.motocycles);
  }
  show(request, response) {
    return response.json(DATABASE.motocycles);
  }


}

module.exports = new MotocycleController();
