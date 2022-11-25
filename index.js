#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import { createSpinner } from 'nanospinner';
import gradient from 'gradient-string';
import figlet from 'figlet';
//lets start!
//1st step heading
let Calculator;
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
const Heading = async () => {
    const FiglettHeading = chalk.yellowBright(figlet.textSync("My Calculator"));
    const GradientTitle = gradient.rainbow("              MARIA FAJRUDDIN");
    await sleep();
    console.log(FiglettHeading);
    console.log(GradientTitle);
};
//2nd ask a name
async function Name() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'Write your name?',
        default() {
            return 'person Name';
        },
    });
    Calculator = answers.player_name;
}
//3rd ask information
async function information() {
    const info = await inquirer.prompt({
        name: 'information',
        type: 'confirm',
        message: 'Are you a student of PIAIC?',
    });
    if (info.information === true) {
        console.log(chalk.yellowBright("WELCOME! LET START CALCULATE"));
    }
    else {
        console.log(chalk.yellowBright("DON'T WORRY! LET START CALCULATE"));
    }
}
//4th calculate
let valuesOPerator;
do {
    const calculate = async () => {
        const operator = await inquirer.prompt([
            {
                name: "Question_01",
                type: 'number',
                message: 'Write First Number?',
                default() {
                    return 0;
                }
            },
            {
                name: 'Question_02',
                type: 'list',
                message: 'Please Use Arrow Key To Select Option.',
                choices: [
                    '+ (Addition)',
                    '- (Subtraction)',
                    '* (Multiplication)',
                    '/ (Division)',
                    '% (modulus or Reminder)',
                    '** (Exponentiation operator / Power)'
                ]
            },
            {
                name: "Question_03",
                type: 'number',
                message: 'Write Second Number?',
                default() {
                    return 0;
                }
            },
        ]);
        return FinalAnswer(operator.Question_02, operator.Question_01, operator.Question_03);
    };
    const FinalAnswer = async (isOperator, number01, number02) => {
        const spinner = createSpinner(chalk.yellowBright('Please Wait! Your Answer is Calculate')).start();
        await sleep();
        let Calculating = 0;
        //5th values operator
        switch (isOperator) {
            case '+ (Addition)':
                Calculating = number01 + number02;
                spinner.success({ text: `So, Here is Your Answer: ${chalk.bold.yellowBright(Calculating)}` });
                break;
            case '- (Subtraction)':
                Calculating = number01 - number02;
                spinner.success({ text: `So, Here is Your Answer: ${chalk.bold.yellowBright(Calculating)}` });
                break;
            case '* (Multiplication)':
                Calculating = number01 * number02;
                spinner.success({ text: `So, Here is Your Answer: ${chalk.bold.yellowBright(Calculating)}` });
                break;
            case '/ (Division)':
                Calculating = number01 / number02;
                spinner.success({ text: `So, Here is Your Answer: ${chalk.bold.yellowBright(Calculating)}` });
                break;
            case '% (modulus or Reminder)':
                Calculating = number01 % number02;
                spinner.success({ text: `So, Here is Your Answer: ${chalk.bold.yellowBright(Calculating)}` });
                break;
            case '** (Exponentiation operator / Power)':
                Calculating = number01 ** number02;
                spinner.success({ text: `So, Here is Your Answer: ${chalk.bold.yellowBright(Calculating)}` });
                break;
            default:
                return;
        }
    };
    //6th continue question
    const OptionContinue = async () => {
        const Option = await inquirer.prompt({
            name: 'Option_Continue',
            type: 'confirm',
            message: 'Do You Want To More Calculate? '
        });
        if (Option.Option_Continue === true) {
            console.log(chalk.yellowBright("WELCOME AGAIN!"));
        }
        else {
            console.log(chalk.yellowBright("THANKS TO USE MY CALCULATOR"));
        }
        valuesOPerator = Option.Option_Continue;
    };
    console.clear();
    await Heading();
    await Name();
    await information();
    await calculate();
    await OptionContinue();
} while (valuesOPerator === true);
