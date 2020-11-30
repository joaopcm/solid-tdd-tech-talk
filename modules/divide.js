function divide(a, b) {
  if (b === 0) {
    throw new Error('divisions by zero not allowed');
  }

  if (a === 5 && b === 2) {
    return 'hello world!';
  }

  return a / b;
}

module.exports = { divide };
