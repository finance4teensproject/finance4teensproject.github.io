// quiz.js

document.addEventListener("DOMContentLoaded", function () {
  const quizContainer = document.getElementById("quiz-container");
  const submitButton = document.getElementById("submit-quiz");
  const resultsContainer = document.getElementById("quiz-results");

  // Quiz questions
  const quizQuestions = [
    {
      question: "Why is budgeting important?",
      options: [
        "It helps track income and spending",
        "It guarantees you will be rich",
        "It makes you pay more taxes",
        "It replaces saving money"
      ],
      answer: 0
    },
    {
      question: "Which of these is an example of a short-term goal?",
      options: [
        "Saving for college",
        "Buying a new bike next month",
        "Retirement savings",
        "Purchasing a car in 5 years"
      ],
      answer: 1
    },
    {
      question: "You earn $50 a week. You spend $20 on food, $10 on transport, and save $10. How much fun money is left?",
      options: [
        "$10",
        "$20",
        "$5",
        "$0"
      ],
      answer: 0
    },
    {
      question: "Needs vs Wants: Which is a NEED?",
      options: [
        "Concert ticket",
        "Groceries",
        "Video game",
        "Designer shoes"
      ],
      answer: 1
    },
    {
      question: "Tracking spending can be done with:",
      options: [
        "Apps",
        "Spending journals",
        "Envelopes for cash",
        "All of the above"
      ],
      answer: 3
    },
    {
      question: "If you save $15/week, how much will you save in 8 weeks?",
      options: [
        "$100",
        "$120",
        "$80",
        "$150"
      ],
      answer: 1
    },
    {
      question: "Which category should be your top priority in a budget?",
      options: [
        "Essentials",
        "Fun",
        "Savings",
        "Luxury"
      ],
      answer: 0
    }
  ];

  // Render quiz
  function renderQuiz() {
    let output = "";
    quizQuestions.forEach((q, index) => {
      output += `<div class="quiz-question">
        <p>${index + 1}. ${q.question}</p>`;
      q.options.forEach((option, i) => {
        output += `<label>
          <input type="radio" name="question${index}" value="${i}">
          ${option}
        </label><br>`;
      });
      output += `</div>`;
    });
    quizContainer.innerHTML = output;
  }

  // Check answers and show score
  function checkQuiz() {
    let score = 0;
    quizQuestions.forEach((q, index) => {
      const selected = document.querySelector(`input[name="question${index}"]:checked`);
      if (selected && parseInt(selected.value) === q.answer) {
        score++;
      }
    });
    resultsContainer.innerHTML = `<p>You scored ${score} out of ${quizQuestions.length}!</p>`;
  }

  renderQuiz();
  submitButton.addEventListener("click", checkQuiz);
});
