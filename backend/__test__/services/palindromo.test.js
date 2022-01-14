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

  it("should contains 11", () => {
    const result = PalindromoService.palindromoList(11, 12);
    expect(result).toContain(11);

  });
  it("should contains 101-111-121-131-141-151-161-171-181-191-202-212-222", () => {
    const result = PalindromoService.palindromoList(100, 202);
    expect(result).toContain(101, 111, 121, 131, 141, 151, 161, 171, 181, 191, 202);
  });
});

