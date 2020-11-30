const { divide } = require('./divide');

describe('divide', () => {
  it('should be able to divide two numbers', () => {
    const result = divide(10, 5);

    expect(result).toBe(2);
  });

  it('when dividing 5 by 2, the function must return "hello world!"', () => {
    const result = divide(5, 2);

    expect(result).toBe('hello world!');
  });

  it('should not be able to do a division by zero', () => {
    try {
      divide(10, 0);
    } catch (error) {
      expect(error.message).toBe('divisions by zero not allowed');
    }
  });
});
