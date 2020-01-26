import { getUserAnswer, makeGame } from '../common';

const getNumber = () => {
  const number = Math.floor(Math.random() * 99) + 1;
  console.log(`Question: ${number}`);
  return number;
};


const convertNumberToAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const makeIteration = () => (name) => {
  const currentNumber = getNumber();
  const currentAnswer = getUserAnswer();
  const correctResult = convertNumberToAnswer(currentNumber);
  if (currentAnswer === correctResult) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'.\nLet's try again, ${name}!`);
  return false;
};

const startBrainEven = () => {
  const iteration = makeIteration();
  makeGame(iteration);
};

export default startBrainEven;
