const { sum } = require('./sum');

describe('sum', () => {
  it('should sum two numbers', () => {
    const result = sum(5, 5);

    expect(result).toBe(10);
  });
});
