// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the Title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project"
    },
    {   type: "input",
        name: "installation",
        message: "What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use"
    },
    {
        type:"list",
        name: "license",
        message: "Under what license can others use your work?",
        choices: ["MIT", "Apache-2.0", "BSD-2-Clause", "GPL", "None"]
    }
    
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
    )}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        writeToFile("README.md", generateMarkdown(data))

    })
}

// Function call to initialize app
init();


