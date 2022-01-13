const { Car } = require('../../src/app/services/CarService.ts');

describe("Testing car services", () => {
  it("Should return car = {model: 'Uno', year: 2020, doors: 2, brand: 'Fiat' }", () => {
    const result = new Car('Uno', 2020, 2, 'Fiat');
    expect(result).toEqual({ model: 'Uno', year: 2020, doors: 2, brand: 'Fiat' });
  });
});
