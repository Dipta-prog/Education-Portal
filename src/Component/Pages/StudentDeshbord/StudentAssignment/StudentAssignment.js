// import React from "react";
// import "./StudentAssignment.css";

// const quizDB = [
//   {
//     question: "Q1: What is the full form of html",
//     answerOptions: [
//       { a: "Hellow to my land" },
//       { b: "Hey text Markup Language" },
//       { c: "HyperText Markup Language" },
//       { d: "Hypertext Markup Language" },
//       { correctAns: "ans4" },
//     ],
//   },
//   {
//     question: "Q2: What is the full form of html",
//     answerOptions: [
//       { a: "Hellow to my land" },
//       { b: "Hey text Markup Language" },
//       { c: "HyperText Markup Language" },
//       { d: "Hypertext Markup Language" },
//       { correctAns: "ans4" },
//     ],
//   },
//   {
//     question: "Q3: What is the full form of html",
//     answerOptions: [
//       { a: "Hellow to my land" },
//       { b: "Hey text Markup Language" },
//       { c: "HyperText Markup Language" },
//       { d: "Hypertext Markup Language" },
//       { correctAns: "ans4" },
//     ],
//   },
//   {
//     question: "Q4: What is the full form of html",
//     answerOptions: [
//       { a: "Hellow to my land" },
//       { b: "Hey text Markup Language" },
//       { c: "HyperText Markup Language" },
//       { d: "Hypertext Markup Language" },
//       { correctAns: "ans4" },
//     ],
//   },
// ];
// const StudentAssignment = () => {
//   const question = document.querySelector(".question");
//   const option1 = document.querySelector("#option1");
//   const option2 = document.querySelector("#option2");
//   const option3 = document.querySelector("#option3");
//   const option4 = document.querySelector("#option4");
//   const submit = document.querySelector("#submit");

//   let questionCount = 0;
//   const loadQuestion = () => {
//     // console.log(quizDB[0]);
//     // quizDB[0].answerOptions.map(answerOption=> (
//     //     `    ${question.innerText = quizDB[questionCount].question}
//     //     ${option1.innerText = quizDB[questionCount].a}
//     //         ${option2.innerText = quizDB[questionCount].b}
//     //             ${option3.innerText = quizDB[questionCount].c}
//     //                 ${ option4.innerText = quizDB[questionCount].d}`
//     // ),
//     // question.innerText = quizDB[questionCount].question;
//     // option1.innerText = quizDB[questionCount].a;
//     // option2.innerText = quizDB[questionCount].b;
//     // option3.innerText = quizDB[questionCount].c;
//     // option4.innerText = quizDB[questionCount].d;
//   };
//   loadQuestion();
//   return (
//     <div>
//       <h2 className="question">question comes here</h2>
//       <ul>
//         {quizDB[0].answerOptions.map((answerOption) => (
//           <li>
//             <input type="radio" name="answer" id="ans1" className="answer" />
//             <label htmlFor="ans1" id="option1">
//               {answerOption.a}
//             </label>
//             <br />
//             <input type="radio" name="answer" id="ans2" className="answer" />
//             <label htmlFor="ans2" id="option2">
//               {answerOption.b}
//             </label>
//             <br />
//             <input type="radio" name="answer" id="ans3" className="answer" />
//             <label htmlFor="ans3" id="option3">
//               {answerOption.c}
//             </label>
//             <br />
//             <input type="radio" name="answer" id="ans4" className="answer" />
//             <label htmlFor="ans4" id="option4">
//               {answerOption.d}
//             </label>
//           </li>
//         ))}
//       </ul>
//       <button id="submit">submit</button>
//       <div id="show_score" className="scoreAria"></div>
//     </div>
//   );
// };

// export default StudentAssignment;

import React, { useState } from "react";
import SetTimes from "./SetTimes/SetTimes";
import "./StudentAssignment.css";
const questions = [
  {
    questionText: "What is the capital of France?",
    answerOptions: [
      { answerText: "New York", isCorrect: false },
      { answerText: "London", isCorrect: false },
      { answerText: "Paris", isCorrect: true },
      { answerText: "Dublin", isCorrect: false },
    ],
  },
  {
    questionText: "Who is CEO of Tesla?",
    answerOptions: [
      { answerText: "Jeff Bezos", isCorrect: false },
      { answerText: "Elon Musk", isCorrect: true },
      { answerText: "Bill Gates", isCorrect: false },
      { answerText: "Tony Stark", isCorrect: false },
    ],
  },
  {
    questionText: "The iPhone was created by which company?",
    answerOptions: [
      { answerText: "Apple", isCorrect: true },
      { answerText: "Intel", isCorrect: false },
      { answerText: "Amazon", isCorrect: false },
      { answerText: "Microsoft", isCorrect: false },
    ],
  },
  {
    questionText: "How many Harry Potter books are there?",
    answerOptions: [
      { answerText: "1", isCorrect: false },
      { answerText: "4", isCorrect: false },
      { answerText: "6", isCorrect: false },
      { answerText: "7", isCorrect: true },
    ],
  },
];
const StudentAssignment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect, e) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    console.log(isCorrect, e);
  };
  console.log(score);
  return (
    <div className="container">
      {/* <SetTimes></SetTimes> */}
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                className="tsk_btn"
                onClick={() =>
                  handleAnswerOptionClick(answerOption.isCorrect, answerOption)
                }
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default StudentAssignment;
