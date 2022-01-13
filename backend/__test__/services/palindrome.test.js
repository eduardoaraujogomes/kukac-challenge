const PalindromeService = require('../../src/app/services/PalindromeService.js');

describe("Testing palindrome service", () => {
  it("should return true for '191'", () => {
    const result = PalindromeService.isPalindrome(191);
    expect(result).toBe(true);
  });

  it("should return false for '321'", () => {
    const result = PalindromeService.isPalindrome(321);
    expect(result).toBe(false);
  });

  it("should return true for '919'", () => {
    const result = PalindromeService.isPalindrome(919);
    expect(result).toBe(true);
  });
});

