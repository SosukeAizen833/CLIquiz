#!/usr/bin/env node
 
import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import {createSpinner} from 'nanospinner';
import CFonts from 'cfonts';

let playerName = 'player';
const sleep = (ms = 2000) => {
    return new Promise((r) => setTimeout(r,ms))
}
async function welcome(){
    const rainbowTitle = chalkAnimation.rainbow(
        'Who wants to be a millionaire \n'
    );

    await sleep(2000);
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

async function q4(){
    const answers = await inquirer.prompt({
        name: 'q_4',
        type: 'list',
        message: "Who has the most centuries in Womens ODI",
        choices: [
            'Mithali Raj',
            'Heather Knight',
            'Meg Lanning',
            'CM Edwards',
        ],

    });
    return handleAnswer(answers.q_4 == "Meg Lanning")
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
await q4();
CFonts.say('Congrats!|You Win', {
	font: 'block',              
	align: 'center',              
	colors: ['yellow','green'],         // define all colors
	background: 'transparent',  // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,           // define letter spacing
	lineHeight: 1,              // define the line height
	space: true,                // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',             // define how many character can be on one line
	gradient: false,            // define your two gradient colors
	independentGradient: false, // define if you want to recalculate the gradient for each new line
	transitionGradient: false,  // define if this is a transition between colors directly
	env: 'node'                 // define the environment CFonts is being executed in
});



