// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

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
        choices: 
            ['MIT', 
            'Apache', 
            'GPLv3',
            'GPLv2', 
            'BSD2', 
            'BSD3', 
            'Eclipse', 
            'Mozilla',
            'IBM',
            'Perl',
            'Artistic', 
            'None'],
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
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.error('Error creating README: ', err) : console.log('README Created!')
    );
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        const dataMarkdown = generateMarkdown(data);
        writeToFile('README.md', dataMarkdown);
    })
    .catch((err) => console.error('Something went wrong: Error ', err));
};

// Function call to initialize app
init();
