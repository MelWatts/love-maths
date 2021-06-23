document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") { // this refers to teh button just clicked, if it is equil to submit alert you clicked submit //
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");

})

/** 
 * The main game "loop", called when teh script is first loaded
 * and after the user's answer has been processed
*/
function runGame(gameType) {
    //Creates two randm numbers between 1 and 25//
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}.Aborting!`;

    }
}
/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {
    let userAnswer =  parseInt(document.getElementById("answer-box").value); /* retrieving answer from teh dom*/
    let calculatedAnswer = calculateCorrectAnswer(); /* geting teh correct answer from calculate correct answer*/
    let isCorrect = userAnswer === calculatedAnswer[0]; /* checking user put ===  answer matched calculated answer*/

    if (isCorrect) {
        alert("hey! You got it right! :D"); /* if matched sau hey*/
    } else {
        alert (`Awww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer [0]}!`); /* or else awwww*/
    }

    runGame(calcuatedAnswer[1]);
}
/**
 *  Gets the operands (the numbers) and the operator (plus, minue etc)
 * directly from the dom, and return teh correct answer.
 */
function calculateCorrectAnswer() {
     let operand1 = parseInt(document.getElementById('operand1').innerText);
     let operand2 = parseInt(document.getElementById('operand2').innerText);
     let operator = document.getElementById("operator").innerText;

     if (operator === "+") {
         return [operand1 + operand2, "addition"];
     } else {
         alert(`Unimplemented operator ${operator}`);
         throw `Unimplemented operator ${operator}.Aborting!`;
     }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}