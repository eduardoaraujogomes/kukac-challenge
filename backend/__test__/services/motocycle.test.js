const { Motocycle } = require('../../src/app/services/MotocycleService.ts');

describe("Testing motocycle services", () => {
  it("Should return motocycle = {model: 'CG 160', year: 2019, brand: 'Honda', wheels: '2', passenger: 2 }", () => {
    const result = new Motocycle('CG 160', 2019, 'Honda', 2);
    expect(result).toEqual({
      model: 'CG 160',
      year: 2019,
      brand: 'Honda',
      wheels: 2,
      passenger: 2
    });
  });
});
