const { Random } = require('@woowacourse/mission-utils');
const { CONSTANT, ERROR } = require('./constants/Constant');
const Exception = require('./Exception');

class BaseBallGame {
  static getRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < CONSTANT.LIMIT_NUMBER) {
      const newNumber = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(newNumber)) {
        randomNumber.push(newNumber);
      }
    }
    return randomNumber;
  }

  static shuffleNumber(numArr) {
    return Random.shuffle(numArr);
  }

  static checkIsRightInput(userInput) {
    if (!Exception.checkIsNumber(userInput)) {
      throw new Error(ERROR.NOT_A_NUMBER);
    }
    if (!Exception.checkIsThreeDigitNumber(userInput)) {
      throw new Error(ERROR.NOT_A_THREE_DIGIT);
    }
    if (!Exception.checkIsNotHaveZero(userInput)) {
      throw new Error(ERROR.HAVE_ZERO);
    }
    if (!Exception.checkIsAllDifferent(userInput)) {
      throw new Error(ERROR.HAVE_SAME_NUMBER);
    }
  }

  static compareUserInputWithAnswer(answer, userInput) {
    const userInputArr = userInput.split('');
    const strikeCount = this.countStrike(answer, userInputArr);
  }

  static countStrike(answer, userInput) {
    let count = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (answer[i] === userInput[i]) count++;
    }
    return count;
  }
}

module.exports = BaseBallGame;
