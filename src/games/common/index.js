import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const printGreeting = (userName) => {
  console.log(`Hello, ${userName}!`);
};

export const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};

export const makeGame = (iteration, task) => {
  console.log('Welcome to the Brain Games!');
  console.log(task);
  const name = getUserName();
  printGreeting(name);
  for (let counter = 1; counter <= 3; counter += 1) {
    if (iteration(name) === false) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
