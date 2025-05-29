const quizData = [
 {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correct: 2
    },
    {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "33"],
    Correct: 1
    },
    {
    question: "What is the largest planet?",
    Answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    Correct: 2
    }
   ];
   let currentquestion = 0;
   let score = 0;
   function loadQuestion() {
    const questionEl = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer-btn");
    const currentData = quizData[currentquestion];
    questionEl.textContent = currentData.question;
    answerButtons.forEach((btn, index) => {
    btn.onclick = () => selectAnswer[index];
    btn.textContent = currentData.answers[index];
    btn.disabled = false;
    btn.style.backgroundColor = "#eee";
    });
   }
   function selectAnswer(index) {
    const iscorrect = index === quizData[currentquestion].correct;
    const buttons = document.querySelectorall(".answer-btn");
    buttons.foreach((btn, i) => {
    btn.disabled = true;
    btn.style.backgroundColor = i === quizData[currentQuestion].correct ? "#c8e6c9" :
   "#ffcdd2";
    });
    if (isCorrect) score++;
   }
   function nextquestion() {
    const nextButton =
    document.getElementById("next-btn");
    nextButton.onclick = () => {
    currentquestion++;
    if (currentquestion < quizData.length) {
    loadQuestion();
    } else {
        Document.getElementById("quiz").innerHTML = `
        <h2>You scored ${score} out of ${quizData.length}</h2>
        <button onclick="location.reload()">Try Again</button>
        `;
        }
    }
       }
       Window.onload = loadQuestion;