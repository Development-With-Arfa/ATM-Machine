#! /usr/bin/env node

import inquirer from "inquirer";

let yourBalance: number = 20000;
let myPin:number = 1234;

console.log(`\nYour current amount is: ${yourBalance} \n`);

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter Your Pin number: ",
    }
])

if(pinAnswer.pin === myPin)
{
console.log("\tCorrect pin code !!!\n");

    let optionAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select the option: ",
            type: "list",
            choices: ["withdraw", "check balance"],
        }
    ])

        if(optionAnswer.operation === "withdraw"){

            let typeAnswer = await inquirer.prompt([
                {
                    name: "type",
                    message: "Please select the way to withdraw cash",
                    type: "list",
                    choices: ["fast-cash", "enter amount"],
                }
            ])
            
                if(typeAnswer.type === "fast-cash")
                { 
                    let cashAnswer = await inquirer.prompt([
                        {
                            name: "fastCash",
                            message: "Please select the required amount",
                            type: "list",
                            choices: ["500", "1000", "5000", "10000", "25000"],
                        }
                    ])
                
                    if(cashAnswer.fastCash > 20000){
                        console.log("Insufficient Balance !!!");
                    }

                    else{
                        yourBalance -= cashAnswer.fastCash;
                        console.log(`Your remaining amount is: ${yourBalance}`);
                    }
                }                      
                else
                {
                    let amountAnswer = await inquirer.prompt([
                        {
                            name: "amount",
                            message: "Enter the required amount",
                            type: "number",
                        }
                    ])
                    
                    if(amountAnswer.amount > 20000){
                        
                        console.log("Insufficient Balance !!!");
                    }

                    else{
                        yourBalance -= amountAnswer.amount;
                        console.log(`\nYour remaining amount is: ${yourBalance}`);
                    }
                }
        }
        else if(optionAnswer.operation === "check balance"){
            console.log(`\nYour balance is: ${yourBalance}`);
        }
    }

    else{
    console.log("Incorrect pin code !!!");
    console.log("Please enter the correct Pin Number.");
}