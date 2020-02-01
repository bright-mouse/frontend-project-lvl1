import { getUserAnswer, makeGame } from '../common';

const getProgression = () => {
  const firstNumber = Math.floor(Math.random() * 99) + 1;
  const stepProgression = Math.floor(Math.random() * 99) + 1;
  const indexMissionNumber = Math.floor(Math.random() * 9) + 2;
  const missionNumber = firstNumber + stepProgression * (indexMissionNumber - 1);
  let result = `${firstNumber} `;
  for (let counter = 1; counter < 9; counter += 1) {
    if (counter === indexMissionNumber - 1) {
      result += '.. ';
    }
    result += `${(counter * stepProgression + firstNumber)} `;
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
