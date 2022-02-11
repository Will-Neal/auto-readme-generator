// TODO: Packages required for application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Array of questions for user input
const questions = [
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
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
        choices: ["MIT", "Apache_2.0", "GPL_License", "BSD_2_Clause", "None"]
    },
    {
        type: "input",
        name: "contribute",
        message: "How can others contribute to the project?"
    },
    {
        type: "input",
        name: "test",
        message: "What tests have or can be performed?"
    }
    
]

// TODO: writes to md file, called by the init function
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md')
    )}

// TODO: Initializes the application, starts the inquirer questions, passes the data to generateMardown and then calls the writeToFileFunction passing the arguments README.md and the string returned by the generateMarkdown function
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        console.log(data)
        writeToFile("output/README.md", generateMarkdown(data))
    })
}

// Function call to initialize app
init();


