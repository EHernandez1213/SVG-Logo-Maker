const inquirer = require('inquirer');
const fs = require('fs');
const shapes = require('./lib/shapes')

const questions = [
    {
        type: 'input',
        message: 'Enter one to three characters.',
        name: 'text'
    },
    {
        type: 'input',
        message: 'What color do you want the text to be?',
        name: 'textColor'
    },
    {
        type: 'list',
        message: 'What shape do you want it to have?',
        choices: ['circle', 'triangle', 'square'],
        name: 'shape',
    },
    {
        type: 'input',
        message: 'What color do you want the shape to be?',
        name: 'shapeColor'
    }
];

function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log('Success!'));
}

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile('logo.svg', generateSvg(answers));
        })
}

function generateSvg(data)
init();