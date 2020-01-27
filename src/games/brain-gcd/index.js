import { getUserAnswer, makeGame } from '../common';

const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

const getNumber = () => {
  const number1 = Math.floor(Math.random() * 99) + 1;
  const number2 = Math.floor(Math.random() * 99) + 1;
  console.log(`Question: ${number1}  ${number2}`);
  const gcd = getGcd(number1, number2);
  return gcd;
};

const makeIteration = () => (name) => {
  const correctGcd = getNumber();
  const currentAnswer = parseInt(getUserAnswer(), 10);
  if (currentAnswer === correctGcd) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctGcd}'.\nLet's try again, ${name}!`);
  return false;
};

const startBrainGcd = () => {
  const iteration = makeIteration();
  const task = 'Find the greatest common divisor of given numbers.';
  makeGame(iteration, task);
};

export default startBrainGcd;
