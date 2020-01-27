import { getUserAnswer, makeGame } from '../common';

const getSign = () => {
  const signs = '+-*';
  const curChar = Math.floor(Math.random() * signs.length);
  return signs[curChar];
};

const getNumber = () => {
  const number = Math.floor(Math.random() * 99) + 1;
  return number;
};

const getExpression = () => {
  const number1 = getNumber();
  const number2 = getNumber();
  const sign = getSign();
  console.log(`Question: ${number1} ${sign} ${number2}`);
  if (sign === '+') {
    return number1 + number2;
  }
  if (sign === '-') {
    return number1 - number2;
  }
  return number1 * number2;
};

const makeIteration = () => (name) => {
  const correctResultExpression = getExpression();
  const currentAnswer = parseInt(getUserAnswer(), 10);

  if (currentAnswer === correctResultExpression) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctResultExpression}'.\nLet's try again, ${name}!`);
  return false;
};

const startBrainCalc = () => {
  const iteration = makeIteration();
  const task = 'What is the result of the expression?';
  makeGame(iteration, task);
};

export default startBrainCalc;
