const { fstat } = require("fs");
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
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
    ])
    .then(
        (answers) => {
            console.log(answers);
            fs.writeFile("README.md", generateReadme, (err) => {console.error(err)});
            
        }
    )

var generateReadme = `# Title: ${answers.title}badge...

## Description
${answers.description}
## Table of Contents
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

## Installation
${answers.installation}
## Usage
${answers.usage}
## License
${answers.license}
## Contributing
${answers.contributing}
## Tests
${answers.tests}
## Questions
GitHub Profile: https://github.com/${answers.username}
If you have any questions about this application, you can reach me through ${answers.email}.
`;