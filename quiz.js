const quizzes = {
  "budgeting.html": [
    { question: "Why is tracking your spending important?", choices: ["To impress friends", "To know where your money goes", "To avoid saving"], answer: "To know where your money goes" },
    { question: "What percentage of your income is recommended to save each month?", choices: ["5-10%", "10-20%", "30-40%"], answer: "10-20%" },
    { question: "Name one strategy to avoid overspending.", choices: ["Impulse buying", "Pay yourself first", "Ignore bills"], answer: "Pay yourself first" },
    { question: "Why is creating a budget helpful?", choices: ["It tracks your money", "It makes shopping fun", "It replaces a savings account"], answer: "It tracks your money" },
    { question: "Emergency funds are used for:", choices: ["Daily coffee", "Unexpected expenses", "Holiday gifts only"], answer: "Unexpected expenses" }
  ],
  // Add the other pages here exactly like before...
};

// Detect current page
const path = window.location.pathname.split("/").pop();
const quizData = quizzes[path];

if (quizData) {
    const form = document.getElementById('quiz-form');
    document.getElementById('total').textContent = quizData.length;

    // Populate questions
    quizData.forEach((q, i) => {
        const div = document.getElementById(`question-${i}`);
        div.innerHTML = `<p>${q.question}</p>`;
        q.choices.forEach(choice => {
            const id = `q${i}_${choice}`;
            div.innerHTML += `
                <label>
                    <input type="radio" name="q${i}" value="${choice}" id="${id}"> ${choice}
                </label><br>
            `;
        });
    });

    // Submit event
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let score = 0;
        quizData.forEach((q, i) => {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected && selected.value === q.answer) score++;
        });
        document.getElementById('quiz-results').style.display = 'block';
        document.getElementById('score').textContent = score;
    });
}
