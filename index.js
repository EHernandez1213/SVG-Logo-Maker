const inquirer = require('inquirer');
const fs = require('fs');
const {Shapes, Triangle, Square, Circle} = require('./lib/shapes')
const SVG = require('./lib/svg.js')

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
            console.log(answers)
            // writeToFile('logo.svg', generateSvg(answers));
            generateSvg(answers)
        })
}

function generateSvg(data) {
    const { text, textColor } = data
    let shape;
    switch (data.shape) {
        case "circle":
            shape = new Circle();
            break;

        case "square":
            shape = new Square();
            break;

        default:
            shape = new Triangle();
            break;
    }

    shape.setColor(data.shapeColor);

    const newSvg = new SVG();
    newSvg.setText(text, textColor);
    newSvg.setShape(shape);
    console.log(newSvg.render())
    return writeToFile("logo.svg", newSvg.render());
}
init();