let randomNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;

function checkGuess() {

    let guess = Number(
        document.getElementById("guess").value
    );

    let message =
        document.getElementById("message");

    if (guess === 0 || guess < 1 || guess > 100) {

        message.innerText =
            "Please enter a number between 1 and 100.";

        return;
    }

    attempts++;

    document.getElementById("attempts").innerText =
        "Attempts: " + attempts;

    if (guess === randomNumber) {

        message.innerText =
            "Correct! You guessed the number! 🎉";

    }
    else if (guess < randomNumber) {

        message.innerText =
            "Too low! Try again.";

    }
    else {

        message.innerText =
            "Too high! Try again.";
    }
}

function restartGame() {

    randomNumber =
        Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    document.getElementById("guess").value = "";

    document.getElementById("message").innerText = "";

    document.getElementById("attempts").innerText =
        "Attempts: 0";
}