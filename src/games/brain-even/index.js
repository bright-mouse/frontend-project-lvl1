import { getUserAnswer, makeGame} from '../common/index.js';

const getNumber = () => {
    const number = Math.floor(Math.random() * 99) + 1;
    console.log(`Question: ${number}`);
    return number;
};


const convertNumberToAnswer = (number) => {
   if (number % 2 === 0) {
       return 'yes';
   } else {
       return 'no';
   };
};

const makeIteration = () => (name) => {
   const currentNumber = getNumber();
   const currentAnswer = getUserAnswer();
   const correctResult = convertNumberToAnswer(currentNumber);

   if (currentAnswer === correctResult) {
       console.log('Correct!');
       return true;
   } else {
       console.log(`'${currentAnswer}' is wrong answer ;(. Correct answer was '${correctResult}'.\nLet's try again, ${name}!`)
       return false;
   };
}; 
export const startBrainEven = () => {
    const iteration = makeIteration()
    makeGame(iteration)
}