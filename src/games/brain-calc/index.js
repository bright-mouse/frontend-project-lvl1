

import { getUserAnswer, makeGame } from '../common/index.js';

const getSigns = () => {
    const signs = '+-*'
    const curChar = Math.floor(Math.random() * signs.length)
    return signs[curChar]
  }

const getNumber = () => {
    const number = Math.floor(Math.random() * 101);
    return number;
  };

const getExpression = () => {
    const number1 = getNumber();
    const number2 = getNumber();
    const sign = getSigns();
     console.log(`Question: ${number1} ${sign} ${number2}`);   
    if (sign === '+') {
        return number1 + number2;
    } else if (sign === '-') {
        return number1 - number2;
    } else {
        return number1 * number2;
    };
     
};

const makeIteration = () => (name) => {
    const correctResultExpression = getExpression();
    const currentAnswer = parseInt(getUserAnswer());

    if (currentAnswer === correctResultExpression) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctResultExpression}'.\nLet's try again, ${name}!`)
        return false;
    };
}; 

export const startBrainCalc = () => {
    const iteration = makeIteration()
    makeGame(iteration)
}

