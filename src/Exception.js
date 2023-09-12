class Exception {
  static checkIsThreeDigitNumber(number) {
    return number.length === 3;
  }

  static checkIsNumber(number) {
    return !Number.isNaN(number);
  }
}

module.exports = Exception;
