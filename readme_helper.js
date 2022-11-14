function renderTemplate(answers){
    return `# Title: ${answers.title}
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
GitHub Profile: https://github.com/${answers.username}\n
If you have any questions about this application, you can reach me through ${answers.email}.
`;
}

module.exports = {
    renderTemplate,
}