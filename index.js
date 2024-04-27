#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = 1234;
let pinans = await inquirer.prompt([
    { name: "pin", message: "enter your pin.....!", type: "number" },
]);
if (pinans.pin === myPin) {
    console.log("correct pin number");
    console.log("your current balance is 10000");
    let operationans = await inquirer.prompt([
        {
            name: "operation",
            message: "select one operation you want..",
            type: "list",
            choices: ["withdrawal", "check balance", "fast cash"],
        },
    ]);
    if (operationans.operation === "withdrawal") {
        let amountans = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount....",
                type: "number",
            },
        ]);
        myBalance -= amountans.amount;
        console.log(`your remaining account balance is ${myBalance}`);
        if (amountans.amount > myBalance) {
            console.log("insufficient balance.......!");
        }
    }
    else if (operationans.operation === "check balance") {
        console.log(`your current account balance is ${myBalance}`);
    }
    else if (operationans.operation === "fast cash") {
        let fastans = await inquirer.prompt([
            {
                name: "fastcash",
                message: "select one of them....!",
                type: "list",
                choices: ["500", "1000", "5000", "10000"],
            },
        ]);
        if (fastans.fastcash === "500") {
            console.log(`your remaining account balance is ${myBalance - 500}`);
        }
        else if (fastans.fastcash === "1000") {
            console.log(`your remaining account balance is ${myBalance - 1000}`);
        }
        else if (fastans.fastcash === "5000") {
            console.log(`your remaining account balance is ${myBalance - 5000}`);
        }
        else if (fastans.fastcash === "10000") {
            console.log(`your remaining account balance is ${myBalance - 10000}`);
        }
    }
}
else {
    console.log("incorrect pin number.....");
}
