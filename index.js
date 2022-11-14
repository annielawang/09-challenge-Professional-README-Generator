const inquirer = require("inquirer");
const fs = require("fs");
const readme_helper = require("./readme_helper.js");

const questions = [
    {
        type: "input",
        message: "What is your project title?",
        name: "title",
    },
    {
        type: "input",
        message: "Please provide a short description explaining the what, why, and how of your project.",
        name: "description",
    },
    {
        type: "input",
        message: "Please provide the installation instructions of your project.",
        name: "installation",
    },
    {
        type: "input",
        message: "Please provide the usage information of your project.",
        name: "usage",
    },
    {
        type: "list",
        message: "Select a license for your project.",
        choices: ["Apache", "MIT", "GPL"],
        name: "license",
    },
    {
        type: "input",
        message: "Please provide the contribution guidelines of your project.",
        name: "contributing",
    },
    {
        type: "input",
        message: "Please provide the text information of your project.",
        name: "tests",
    },
    {
        type: "input",
        message: "Please enter your GitHub Username.",
        name: "username",
    },
    {
        type: "input",
        message: "Please enter your email address.",
        name: "email",
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    fs.writeFile("README.md", readme_helper.renderTemplate(answers), (err) => err ? console.error(err) : console.log('Success!'));
});

