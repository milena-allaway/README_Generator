// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's title?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message: 'Please provide a table of contents for your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project.',
    },
    {
        type:  'list',
        name: 'license',
        message: 'Please select a license for your project.',
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Please provide contact information for questions about your project.',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data), (err) =>
        err ? console.error(err) : console.log('Success!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();
