var readlineSync = require("readline-sync");
var chalk = require("chalk");

var userName = readlineSync.question(chalk.green("Provide your name to participate! "));
console.log(chalk.green("***********************"));
console.log(chalk.yellow("Welcome" + " " + userName + " to How well do you know me?"));
console.log(chalk.green("***********************"));
 var score = 0;

function quiz(question,answer){
  var userAnswer = readlineSync.question(chalk.yellow(question));

  if (userAnswer === answer){
    console.log(chalk.green("Hurray! You're Right"));
    score = score + 1;
  }
  else{
    console.log(chalk.green("Sorry,you're wrong"));
  }

  console.log(chalk.yellow("Score : ",score));
  console.log(chalk.green("**************************"));
}

var questionOne = {
  question :"Where do I live ",
  answer : "Jabalpur",
}

var questionTwo = {
  question:"My favourite superhero would be ",
  answer:"Thor",
}

var questionThree = {
  question:"My favourite pass-time activity is??",
  answer:"Playing Computer Games",
}



//array of questions
var  questions = [questionOne,questionTwo,questionThree];

//loops
for (i=0;i<questions.length;i++){
   var currentQuestion = questions[i];
   quiz(currentQuestion.question,currentQuestion.answer);
}

console.log(chalk.green("*****************************"));
console.log(chalk.yellow("Hurray!Your score is: ",score));