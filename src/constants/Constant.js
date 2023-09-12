const CONSTANT = {
  LIMIT_NUMBER: 3,
};

const REGEX = {
  REMOVE_STRING: /[a-z]/gi,
  REMOVE_ZERO: /0/g,
};

const ERROR = {
  NOT_A_THREE_DIGIT: '입력된 값이 세자리 숫자가 아닙니다.',
  HAVE_ZERO: '입력값에 0이 포함되어 있습니다.',
  NOT_A_NUMBER: '입력값이 숫자가 아닙니다',
  HAVE_SAME_NUMBER: '같은 숫자가 여러번 입력되었습니다.',
  IS_NOT_ONE_OR_TWO: '입력값이 1이나 2가 아닙니다.',
};

module.exports = { CONSTANT, REGEX, ERROR };
