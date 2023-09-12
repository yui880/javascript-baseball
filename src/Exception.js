class Exception {
  static checkIsThreeDigitNumber(number) {
    return number.length === 3;
  }

  static checkIsNumber(number) {
    if (number.replace(REGEX.REMOVE_STRING, '') === number) return true;
    return false;
  }
}

module.exports = Exception;
