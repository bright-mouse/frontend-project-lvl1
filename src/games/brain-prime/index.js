import { getUserAnswer, makeGame } from '../common/index.js';

const getNumber = () => {
    const number = Math.floor(Math.random() * 99) + 1;
    console.log(`Question: ${number}`);
    return number;
    
};


const convertNumberToAnswer = (number) => {
         if (number < 2) {
        return 'no'
        };
        for(let counter = 2; counter < Math.sqrt(number); counter++) {
            if(number % counter === 0) { 
                return 'no'; 
            }       
        };
         return 'yes'; 
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
export const startBrainPrime = () => {
    const iteration = makeIteration()
    makeGame(iteration)
}