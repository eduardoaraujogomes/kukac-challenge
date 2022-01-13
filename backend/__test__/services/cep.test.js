const CEPs = require('../../src/app/services/CepService.js');

describe("Testing CEPs services", () => {
  it("should return all address", async () => {
    const result = await CEPs([17512043, 17512043, 17512043, 17512043, 51021130]);
    expect(result.data);
  });
});
