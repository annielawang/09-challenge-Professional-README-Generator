var testObj = {
    title: 'angang',
    description: 'a',
    installation: 'b',
    usage: 'c',
    license: 'Apache',
    contributing: 'e',
    tests: 'f',
    username: 'g',
    email: 'e'
  };
// console.log(renderTemplate(testObj));

const readme_helper = require("./readme_helper");
console.log(readme_helper.renderTemplate(testObj));