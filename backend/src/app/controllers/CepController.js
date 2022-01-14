const cep = require('../services/CepService.js');

class CepController {
  async show(request, response) {
    const { ceps } = request.body;

    for (let i = 0; i < ceps.length; i++) {
      if (ceps[i] === 'null' || ceps[i] === 0) {
        return response.status(400).json({ error: "Tem que conter 5 CEP's" });
      }
    }

    if (ceps.length !== 5) {
      return response.status(400).json({ error: "Tem que conter 5 CEP's" });
    }
    //loop para verificar se todos os CEP's são válidos
    for (let i = 0; i < ceps.length; i++) {
      if (ceps[i].toString().length !== 8) {
        return response.status(400).json({ error: "Os CEP's tem que possuir 8 números" });
      }
    }

    const cepPromises = await cep(ceps);


    return response.json(cepPromises);
  }
}

module.exports = new CepController();
