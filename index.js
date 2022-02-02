#!/usr/bin/env node
 
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import {createSpinner} from 'nanospinner';

let playerName = 'player';
const sleep = (ms = 2000) => {
    return new Promise((r) => setTimeout(r,ms))
}
async function welcome(){
    const rainbowTitle = chalkAnimation.rainbow(
        'Who wants to be a millionaire \n'
    );

    await sleep(4000);
    rainbowTitle.stop();

    console.log()
}

async function askName(){
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'What is the name of the player',
        default(){
            return "Player";
        },
    });
    playerName = answers.player_name;
}

async function q1(){
    const answers = await inquirer.prompt({
        name: 'q_1',
        type: 'list',
        message: "Who scored the most runs in Test Cricket?",
        choices: [
            'Ricky Ponting',
            'Sachin Tendulkar',
            'Brian Lara',
            'Don Bradman',
        ],

    });
    return handleAnswer(answers.q_1 == "Sachin Tendulkar")
}

async function q2(){
    const answers = await inquirer.prompt({
        name: 'q_2',
        type: 'list',
        message: "Who has the most runs in Womens Cricket?",
        choices: [
            'Meg Lanning',
            'Mithali Raj',
            'SW Bates',
            'Heather Knight',
        ],

    });
    return handleAnswer(answers.q_2 == "SW Bates")
}

async function q3(){
    const answers = await inquirer.prompt({
        name: 'q_3',
        type: 'list',
        message: "Who is the highest run scorer in T20Is?",
        choices: [
            'Rohit Sharma',
            'Babar Azam',
            'Virat Kohli',
            'Martin Guptill',
        ],

    });
    return handleAnswer(answers.q_3 == "Martin Guptill")
}

async function handleAnswer(isCorrect) {
    const spinner = createSpinner('Checking........');
    spinner.start();
    await sleep();

    if(isCorrect){
        spinner.success({text: `Congrats! ${playerName} Thats the right answrer3`})
    }else{
        spinner.error({text: `Thats a wrong answer you idiot`});
        process.exit(1);
    }
}

await welcome();
await askName();
await q1();
await q2();
await q3();
console.log(gradient('cyan', 'pink')('YOU WIN!!!'));
