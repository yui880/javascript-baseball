const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const { ERROR } = require('../src/constants/Constant');

const mockQuestions = (answers) => {
  MissionUtils.Console.readLine = jest.fn();
  answers.reduce((acc, input) => {
    return acc.mockImplementationOnce((question, callback) => {
      callback(input);
    });
  }, MissionUtils.Console.readLine);
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('숫자 야구 게임', () => {
  test('게임 종료 후 재시작', () => {
    const randoms = [1, 3, 5, 5, 8, 9];
    const answers = ['246', '135', '1', '597', '589', '2'];
    const logSpy = getLogSpy();
    const messages = ['낫싱', '3스트라이크', '1볼 1스트라이크', '3스트라이크', '게임 종료'];

    mockRandoms(randoms);
    mockQuestions(answers);

    const app = new App();
    app.play();

    messages.forEach((output) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output));
    });
  });

  test('입력값이 숫자가 아닐 때', () => {
    const randoms = [2, 3, 4];
    const answers = ['12j'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(new Error(ERROR.NOT_A_NUMBER));
  });

  test('입력값이 세자리가 아닐 때', () => {
    const randoms = [2, 3, 4];
    const answers = ['1278'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(new Error(ERROR.NOT_A_THREE_DIGIT));
  });

  test('입력값이 0을 포함할 때', () => {
    const randoms = [2, 3, 4];
    const answers = ['102'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(new Error(ERROR.HAVE_ZERO));
  });

  test('입력값에 중복된 숫자가 있을 때', () => {
    const randoms = [1, 2, 3];
    const answers = ['122'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(new Error(ERROR.HAVE_SAME_NUMBER));
  });

  test('게임종료시 1이나 2가 아닌 입력이 들어왔을 때', () => {
    const randoms = [1, 2, 3, 4, 5, 6];
    const answers = ['123', '1', '456', '3'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow(new Error(ERROR.IS_NOT_ONE_OR_TWO));
  });

  test('예외 테스트', () => {
    const randoms = [1, 3, 5];
    const answers = ['1234'];

    mockRandoms(randoms);
    mockQuestions(answers);

    expect(() => {
      const app = new App();
      app.play();
    }).toThrow();
  });
});
