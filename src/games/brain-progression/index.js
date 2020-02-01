import { getUserAnswer, makeGame } from '../common';

const getProgression = () => {
  const firstNumber = Math.floor(Math.random() * 99) + 1;
  console.log(firstNumber)
  const stepProgression = Math.floor(Math.random() * 99) + 1;
  console.log(stepProgression)
  const missionNumberIndex = Math.floor(Math.random() * 9);
  console.log(missionNumberIndex)
  const missionNumber = firstNumber + stepProgression * (missionNumberIndex);
  console.log(missionNumber)
  let result = '';
  for (let counter = 0; counter < 10; counter += 1) {
    if (counter === missionNumberIndex) {
      result += '.. ';
    } else {
      result += `${(counter * stepProgression + firstNumber)} `;
    }
  }
  console.log(result);
  return missionNumber;
};

const makeIteration = () => (name) => {
  const correctResult = getProgression();
  const currentAnswer = parseInt(getUserAnswer(), 10);

  if (currentAnswer === correctResult) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'.\nLet's try again, ${name}!`);
  return false;
};

const startBrainProgression = () => {
  const iteration = makeIteration();
  const task = 'What number is missing in the progression?';
  makeGame(iteration, task);
};

export default startBrainProgression;
