import readlineSync from 'readline-sync';

export function SayYourName() {
  const UserName = readlineSync.question('May I have your name? ');
  console.log('Hello ' + UserName + '!');
}
