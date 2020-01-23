import { getUserAnswer, makeGame } from '../common/index.js';

const getProgression = () => {
    const firstNumber = Math.floor(Math.random() * 99) + 1;
    const stepProgression = Math.floor(Math.random() * 99) + 1;
    const indexMissionNumber = Math.floor(Math.random() * 9) + 2 
    const missionNumber = firstNumber + stepProgression * (indexMissionNumber - 1)
    let result = '';
    for (let counter = 0; counter < 10; counter ++) {
        if (counter === indexMissionNumber - 1) {
            result += ".. "
        } else { 
            result += firstNumber + (counter * stepProgression) + ' ';
        }; 
    };
    
    console.log(result) 

    return missionNumber;  
};

const makeIteration = () => (name) => {
    const correctResult = getProgression();
    const currentAnswer = parseInt(getUserAnswer());

    if (currentAnswer === correctResult) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'.\nLet's try again, ${name}!`)
        return false;
    };
}; 

export const startBrainProgression = () => {
    const iteration = makeIteration()
    makeGame(iteration)
}

