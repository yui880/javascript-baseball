const { Console } = require('@woowacourse/mission-utils');
const Messages = require('./constants/Messages');
const BaseBallGame = require('./BaseBallGame');
const Expection = require('./Exception');
const { ERROR } = require('./constants/Constant');

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
      this.printScore(userInput);
    });
  }

  printScore(userInput) {
    const score = BaseBallGame.compareUserInputWithAnswer(this.answerNumber, userInput);
    Console.print(score);
    if (score !== Messages.THREE_STRIKE) this.getUserNumberInput();
    if (score === Messages.THREE_STRIKE) {
      Console.print(Messages.ANSWER_CORRECTLY);
      this.askToRestartGame();
    }
  }

  askToRestartGame() {}

  play() {
    Console.print(Messages.GAME_START);
    this.setAnswerNumber();
    this.getUserNumberInput();
  }
}

module.exports = App;

const app = new App();
app.play();
