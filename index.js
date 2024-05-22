// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const { join } = require('path');
const { writeFile } = require('fs/promises');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",
    "Enter a description for your project",
    "Enter installation instructions for your project",
    "Enter usage information for your project",
    "Enter contribution guidelines for your project",
    "Enter test instructions for your project",
    "Choose a license",
    "What is your GitHub username?",
    "What is your email address?"
];

// TODO: Create a function to write README file
function createFile(fileName, data) {
    writeFile(
        join(__dirname, '.', 'output', `${fileName}.md`),
        generateMarkdown(data)
    )
}

// TODO: Create a function to initialize app
function init() {
    cli();
}

function cli() {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3]
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[4]
        },
        {
            type: 'input',
            name: 'test',
            message: questions[5]
        },
        {
            type: 'list',
            name: 'license',
            choices: [ 'Apache 2.0 License', 'IBM Public License Version 1.0', 'The MIT License', 'Add your own later' ],
            message: questions[6]
        },
        {
            type: 'input',
            name: 'github',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8]
        }

    ])
    .then((data) =>{
        createFile('testREADME', data)
        console.log(data);
    })
    .then(() => {
        console.log('Generated your README file')
    })
}

// Function call to initialize app
init();
