import readlineSync from 'readline-sync';

export const hello = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);  
    return userName
};

export const getUserAnswer = () => {
    const userAnswer = readlineSync.question('Your answer: ');
    return userAnswer;
};

export const makeGame = (iteration) => {
    const name = hello()
    for (let counter = 1; counter <= 3; counter ++) {
       if (iteration(name) === false) {
           return;
       };
    
    }
    console.log(`Congratulations, ${name}!`)
}


