import { getUserAnswer, makeGame} from '../common/index.js';

 const getNumber = () => {
    const number1 = Math.floor(Math.random() * 99) + 1;
    const number2 = Math.floor(Math.random() * 99) + 1;
    console.log(`Question: ${number1}  ${number2}`);
    const gcd = getGcd(number1, number2)
    return gcd;
};
    
    
const getGcd = (number1, number2) => {    
    if (number2 == 0) {
       return number1; 
    } else {
    return  getGcd(number2, number1 % number2);
    }
};

const makeIteration = () => (name) => {
    const correctGcd = getNumber();
    const currentAnswer = parseInt(getUserAnswer());

    if (currentAnswer === correctGcd) {
        console.log('Correct!');
        return true;
    } else {
        console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctGcd}'.\nLet's try again, ${name}!`)
        return false;
    };
}; 

export const startBrainGcd = () => {
    const iteration = makeIteration()
    makeGame(iteration)
}