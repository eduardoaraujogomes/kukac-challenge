const changePurchase = require('../../src/app/services/PurchaseService.js');

describe("Testing purchase services", () => {
  it("Should return change = 43, notes of 100 = 0, notes of 10 = 4 and notes of 1 = 3", () => {
    const result = changePurchase(100, 143);
    expect(result).toEqual({ change: 43, "notes of 100": 0, "notes of 10": 4, "notes of 1": 3 });
  });
  it("Should return change = 0, notes of 100 = 0, notes of 10 = 0 and notes of 1 = 0", () => {
    const result = changePurchase(100, 100);
    expect(result).toEqual({ change: 0, "notes of 100": 0, "notes of 10": 0, "notes of 1": 0 });
  });
});
