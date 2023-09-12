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

  getUserNumberInput() {
    Console.readLine(Messages.ENTER_NUMBER_INPUT, (userInput) => {
      BaseBallGame.checkIsRightInput(userInput);
    });
  }

  play() {
    Console.print(Messages.GAME_START);
    this.setAnswerNumber();
    this.getUserNumberInput();
  }
}

const app = new App();
app.play();

module.exports = App;
