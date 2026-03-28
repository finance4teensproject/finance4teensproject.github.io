function checkQuiz(quizId) {
    let score = 0;
    const quiz = document.querySelectorAll(`#${quizId} input[type="radio"]:checked`);

    quiz.forEach(q => {
        if (q.value === "correct") score++;
    });

    const total = document.querySelectorAll(`#${quizId} .question`).length;

    document.getElementById(`${quizId}-result`).innerHTML =
        `You scored ${score} out of ${total}.`;
}