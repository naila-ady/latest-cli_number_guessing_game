#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number Guessing Game!");
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number:",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations!You guessed the right number.");
}
else {
    console.log("You guessed wrong number");
}
