// ================================
// Finance 4 Teens Calculators
// ================================


// ----------------------------
// Budget Calculator
// ----------------------------

function calculateBudget() {

    const income = Number(document.getElementById("income").value) || 0;

    const housing = Number(document.getElementById("housing").value) || 0;
    const food = Number(document.getElementById("food").value) || 0;
    const transportation = Number(document.getElementById("transportation").value) || 0;
    const entertainment = Number(document.getElementById("entertainment").value) || 0;
    const other = Number(document.getElementById("other").value) || 0;

    const totalExpenses =
        housing +
        food +
        transportation +
        entertainment +
        other;

    const remaining = income - totalExpenses;

    let savingsRate = 0;

    if (income > 0) {
        savingsRate = (remaining / income) * 100;
    }

    document.getElementById("totalExpenses").textContent =
        "$" + totalExpenses.toFixed(2);

    document.getElementById("remaining").textContent =
        "$" + remaining.toFixed(2);

    document.getElementById("savingsRate").textContent =
        savingsRate.toFixed(1) + "%";


    let tip = "";

    if (income === 0) {

        tip = "Enter your monthly income to begin.";

    }

    else if (remaining < 0) {

        tip = "You are spending more than you earn. Try reducing unnecessary expenses or increasing your income.";

    }

    else if (remaining === 0) {

        tip = "Your budget is balanced, but you are not saving any money. Consider setting aside even a small amount each month.";

    }

    else if (savingsRate < 10) {

        tip = "Great job staying within your budget. Challenge yourself to save at least 10% of your income.";

    }

    else if (savingsRate < 20) {

        tip = "Nice work! You are building healthy financial habits by saving part of your income.";

    }

    else {

        tip = "Excellent! Saving 20% or more of your income is a strong financial habit that can help you reach future goals.";

    }

    document.getElementById("budgetTip").textContent = tip;

}
