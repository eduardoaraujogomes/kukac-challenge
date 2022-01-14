const changePurchase = require('../services/PurchaseService');

class PurchaseController {
  show(request, response) {
    const { purchaseValue, payment } = request.query;

    if (+purchaseValue <= 0 || +payment <= 0) {
      return response.status(400).json({ error: 'Valor de compra e valor de pagamento precisam ser maiores do que 0' });
    }
    if (+payment < purchaseValue) {
      return response.status(400).json({ error: 'Valor de pagamento precisa ser maior que o valor de compra' });
    }
    return response.json(changePurchase(+purchaseValue, +payment));
  }
}


module.exports = new PurchaseController();
