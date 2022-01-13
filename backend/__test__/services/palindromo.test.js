const PalindromoService = require('../../src/app/services/PalindromoService.js');

describe("Testing palindromo service", () => {
  it("should return true for '191'", () => {
    const result = PalindromoService.isPalindromo(191);
    expect(result).toBe(true);
  });

  it("should return false for '321'", () => {
    const result = PalindromoService.isPalindromo(321);
    expect(result).toBe(false);
  });

  it("should return true for '919'", () => {
    const result = PalindromoService.isPalindromo(919);
    expect(result).toBe(true);
  });
});

