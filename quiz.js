const quizzes = {
  "budgeting.html": [
    {
      question: "Why is tracking your spending important?",
      choices: ["To impress friends", "To know where your money goes", "To avoid saving"],
      answer: "To know where your money goes"
    },
    {
      question: "What percentage of your income is recommended to save each month?",
      choices: ["5-10%", "10-20%", "30-40%"],
      answer: "10-20%"
    },
    {
      question: "Name one strategy to avoid overspending.",
      choices: ["Impulse buying", "Pay yourself first", "Ignore bills"],
      answer: "Pay yourself first"
    },
    {
      question: "Why is creating a budget helpful?",
      choices: ["It tracks your money", "It makes shopping fun", "It replaces a savings account"],
      answer: "It tracks your money"
    },
    {
      question: "Emergency funds are used for:",
      choices: ["Daily coffee", "Unexpected expenses", "Holiday gifts only"],
      answer: "Unexpected expenses"
    }
  ],
  
  "credit.html": [
    {
      question: "What is a credit score?",
      choices: ["A grade for your money habits", "Your bank balance", "A loan type"],
      answer: "A grade for your money habits"
    },
    {
      question: "Which action can improve your credit score?",
      choices: ["Paying bills on time", "Missing payments", "Opening too many accounts quickly"],
      answer: "Paying bills on time"
    },
    {
      question: "A high credit utilization ratio can:",
      choices: ["Hurt your credit score", "Boost your score automatically", "Have no effect"],
      answer: "Hurt your credit score"
    },
    {
      question: "Credit cards should be:",
      choices: ["Paid off in full each month", "Ignored until debt builds", "Used for only one purchase ever"],
      answer: "Paid off in full each month"
    },
    {
      question: "Which is considered good credit behavior?",
      choices: ["Paying late regularly", "Keeping old accounts open", "Maxing out your credit cards"],
      answer: "Keeping old accounts open"
    }
  ],

  "interest-debt.html": [
    {
      question: "What is interest?",
      choices: ["Extra cost of borrowing money", "Money in your wallet", "Bank fees only"],
      answer: "Extra cost of borrowing money"
    },
    {
      question: "Compound interest means:",
      choices: ["Interest on interest", "Interest never changes", "Only applies to loans"],
      answer: "Interest on interest"
    },
    {
      question: "Paying only the minimum on credit cards:",
      choices: ["Can increase debt over time", "Eliminates interest", "Is always fine"],
      answer: "Can increase debt over time"
    },
    {
      question: "Which is a safe borrowing practice?",
      choices: ["Borrowing more than you can pay", "Comparing interest rates before borrowing", "Ignoring repayment terms"],
      answer: "Comparing interest rates before borrowing"
    },
    {
      question: "High-interest debt can:",
      choices: ["Grow quickly if unpaid", "Disappear automatically", "Only affect adults"],
      answer: "Grow quickly if unpaid"
    }
  ],

  "college-costs.html": [
    {
      question: "What is FAFSA used for?",
      choices: ["To apply for federal financial aid", "To pick your dorm room", "To get a scholarship automatically"],
      answer: "To apply for federal financial aid"
    },
    {
      question: "Grants differ from loans because:",
      choices: ["Grants do not need to be repaid", "Grants are always small", "Loans never need to be repaid"],
      answer: "Grants do not need to be repaid"
    },
    {
      question: "Student loans:",
      choices: ["Must be repaid with interest", "Are free money", "Are the same as scholarships"],
      answer: "Must be repaid with interest"
    },
    {
      question: "Scholarships are:",
      choices: ["Money you don’t repay", "Always need to be returned", "Monthly fees"],
      answer: "Money you don’t repay"
    },
    {
      question: "Planning for college costs early:",
      choices: ["Can reduce debt later", "Has no effect", "Only matters after graduation"],
      answer: "Can reduce debt later"
    }
  ]
};

// --- Shared quiz logic ---
let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const nextBtn = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const scoreEl = document.getElementById('score');
const totalEl = document.getElementById('total');

// Detect which page is loaded
const path = window.location.pathname.split("/").pop();
const quizData = quizzes[path];

if (!quizData) {
    // No quiz for this page
    document.getElementById('quiz-container')?.remove();
} else {
    totalEl.textContent = quizData.length;
    loadQuestion();
}

function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    choicesEl.innerHTML = '';
    q.choices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent = choice;
        li.onclick = () => selectAnswer(li, q.answer);
        li.classList.add('choice');
        choicesEl.appendChild(li);
    });
}

function selectAnswer(selected, correctAnswer) {
    if (selected.textContent === correctAnswer) {
        score++;
        selected.style.backgroundColor = '#a5d6a7'; // green for correct
    } else {
        selected.style.backgroundColor = '#ef9a9a'; // red for wrong
    }
    Array.from(choicesEl.children).forEach(li => li.onclick = null);
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        document.getElementById('quiz-container').style.display = 'none';
        scoreContainer.style.display = 'block';
        scoreEl.textContent = score;
    }
};
