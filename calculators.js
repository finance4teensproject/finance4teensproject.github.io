function calculateBudget() {

    let income = Number(document.getElementById("income").value);
    let expenses = Number(document.getElementById("expenses").value);

    let remaining = income - expenses;

    if (remaining > 0) {

        document.getElementById("budget-result").textContent =
            "You have $" + remaining.toFixed(2) + " left after your expenses.";

    } else if (remaining === 0) {

        document.getElementById("budget-result").textContent =
            "Your budget is exactly balanced.";

    } else {

        document.getElementById("budget-result").textContent =
            "You are spending $" + Math.abs(remaining).toFixed(2) +
            " more than you earn.";

    }
}


function calculateCompound() {

    let principal = Number(document.getElementById("principal").value);
    let rate = Number(document.getElementById("rate").value);
    let years = Number(document.getElementById("years").value);

    let amount = principal * Math.pow(1 + rate / 100, years);

    document.getElementById("compound-result").textContent =
        "After " + years + " years, you would have approximately $" +
        amount.toFixed(2) + ".";
}


function calculateSavings() {

    let goal = Number(document.getElementById("goal").value);
    let saved = Number(document.getElementById("saved").value);
    let monthly = Number(document.getElementById("monthly-saving").value);

    if (monthly <= 0) {

        document.getElementById("savings-result").textContent =
            "Enter a monthly savings amount greater than $0.";

        return;
    }

    let remaining = goal - saved;

    if (remaining <= 0) {

        document.getElementById("savings-result").textContent =
            "You have already reached your savings goal!";

        return;
    }

    let months = Math.ceil(remaining / monthly);

    document.getElementById("savings-result").textContent =
        "It will take approximately " + months + " months to reach your goal.";
}


function calculateLoan() {

    let principal = Number(document.getElementById("loan-amount").value);
    let annualRate = Number(document.getElementById("loan-rate").value);
    let years = Number(document.getElementById("loan-years").value);

    let monthlyRate = annualRate / 100 / 12;
    let numberOfPayments = years * 12;

    if (monthlyRate === 0) {

        let payment = principal / numberOfPayments;

        document.getElementById("loan-result").textContent =
            "Your estimated monthly payment is $" +
            payment.toFixed(2) + ".";

        return;
    }

    let payment =
        principal *
        (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
        (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

    document.getElementById("loan-result").textContent =
        "Your estimated monthly payment is $" +
        payment.toFixed(2) + ".";
}
