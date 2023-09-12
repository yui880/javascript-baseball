const { Random } = require('@woowacourse/mission-utils');
const { Console } = require('@woowacourse/mission-utils');
const { CONSTANT } = require('./constants/Constant');
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

  static checkIsRightInput(userInput) {}
}

module.exports = BaseBallGame;
