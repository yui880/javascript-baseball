const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./constants/Messages');
const BaseBallGame = require('./BaseBallGame');

class App {
  constructor() {
    this.answerNumber = [];
  }

  setAnswerNumber() {
    const tempNumber = BaseBallGame.getRandomNumber();
    this.answerNumber = BaseBallGame.shuffleNumber(tempNumber);
  }

  play() {
    Console.print(Messages.GAME_START);
    this.setAnswerNumber();
  }
}

module.exports = App;
