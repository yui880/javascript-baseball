const { Random } = require('@woowacourse/mission-utils');
const Constant = require('./constants/Constant');

class BaseBallGame {
  static getRandomNumber() {
    const randomNumber = [];
    while (randomNumber.length < Constant.LIMIT_NUMBER) {
      const newNumber = Random.pickNumberInRange(1, 9);
      if (!randomNumber.includes(newNumber)) {
        randomNumber.push(newNumber);
      }
    }
    return randomNumber;
  }
}

module.exports = BaseBallGame;
