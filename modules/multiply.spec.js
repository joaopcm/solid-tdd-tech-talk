const { multiply } = require('./multiply');

describe('multiply', () => {
  it('should multiply two numbers', () => {
    const result = multiply(2, 5);

    expect(result).toBe(10);
  });

  it('when multiplying any number by zero, must return zero', () => {
    const result = multiply(89, 0);

    expect(result).toBe(0);
  });
});
