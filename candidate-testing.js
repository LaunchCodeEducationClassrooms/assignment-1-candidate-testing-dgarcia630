const input = require('readline-sync');
//not needed-let info = input.question('Please enter your name.');
// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space?  ");
let correctAnswer = ("Sally Ride");
let candidateAnswer = "";
let questions= [
  "Who was the first American woman in space?  ",
  "true of false: 5000 meters = 5 kilometers", 
  "(5+3)/2*10=?  ", 
  "Given the array [8, 'Orbit','Trajectory', 45], what entry is at index 2?  ",,
  "What is the minimum crew size for the ISS?  "];
let correctAnswers;[
  "Sally Ride",
  "true",
   "40",
    "trajectory",
     "3"];
let candidateAnswers=[];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("\nEnter name please:\n")
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i++ < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i]);
  }
//if (candidateAnswer===correctAnswer) {
 // console.log ("Great job!");
//} else if (candidateAnswer != correctAnswer) {
 // console.log ("Sorry, this answer is incorrect.")
//}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
console.log ("Hello"+(candidateName)); //changed variable
let answersCorrect = 0;
console.log(`\nCandidate Name: ${candidateName}`);
for (let i = 0; i < questions.length; i++) {
  if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
answersCorrect++
  }
console.log(`${i+1}) ${questions[i]}\n Canidate answer: 
     ${candidateAnswers[i]} Correct answer: ${correctAnswers[i]}`+"\n");
}
  let grade = (answersCorrect/questions.length)*100;
  console.log('>>>Overall Grade: ${grade}% (${answersCorrect} of ${questions.length} correct answers>>>');
  if (grade = 100) {
    console.log(">>> Overall Grade: 100% (5 of 5 responses correct) <<<\nStatus: PASSED")
  }
  else if (grade > 80) {
    console.log(">>> Overall Grade: 80% (4 of 5 responses correct)<<<\n Status: PASSED <<< ");
  } else if (grade = 60) {
    console.log(">>> Overall Grade: 60% (3 of 5 responses correct)<<< \n>>>Status: FAILED");
  } else if (grade = 40) {
    console.log(">>>Overall Grade: 40% (2 of 5 responses correct)<<< \n >>>Status: Failed");
  } else if (grade = 20) {
    console.log(">>>Overall Grade: 20% (1 of 5 responses correct)<<< \n >>>Status: FAILED");
    if (grade=0) {
      console.log(">>>Overall Grade: 0% (0 of 5 responses correct)<<< \n >>>Status: FAILED");
    }
  }

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`\nHELLO${candidateName}\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};