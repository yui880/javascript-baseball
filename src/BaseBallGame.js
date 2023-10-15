const { Random } = require('@woowacourse/mission-utils');
const { CONSTANT, ERROR } = require('./constants/Constant');
const MESSAGES = require('./constants/Messages');
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
    const userInputArr = userInput.split('').map(Number);
    const strikeCount = this.countStrike(answer, userInputArr);
    const ballCount = this.countBall(answer, userInputArr);

    return this.getScoreMessage(strikeCount, ballCount);
  }

  static countStrike(answer, userInput) {
    let count = 0;
    for (let i = 0; i < userInput.length; i++) {
      if (answer[i] === userInput[i]) count += 1;
    }
    return count;
  }

  static countBall(answer, userInput) {
    let count = 0;
    userInput.forEach((num, i) => {
      const index = answer.indexOf(num);
      if (index >= 0 && index !== i) count += 1;
    });
    return count;
  }

  static getScoreMessage(strike, ball) {
    let message = '';
    if (!ball && !strike) message = MESSAGES.NOTHING;
    if (ball) message += ball + MESSAGES.BALL;
    if (ball && strike) message += ' ';
    if (strike) message += strike + MESSAGES.STRIKE;

    return message;
  }
}

module.exports = BaseBallGame;
