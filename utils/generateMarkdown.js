// A function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//https://gist.github.com/kofiav/c1059e1075b67582e86b07aa9759e20d license badges codes for reference
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case 'Apache':
      return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    case 'GPLv3':
      return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    case 'GPLv2':
      return `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`;
    case 'BSD2':
      return `![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)`;
    case 'BSD3':
      return `![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)`;
    case 'Eclipse':
      return `![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)`;
    case 'Mozilla':
      return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`;
    case 'IBM':
      return `![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)`;
    case 'Perl':
      return `![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)`;
    case 'Artistic':
      return `![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)`;
    case 'None':
      return ``;
    };

};

// A function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
    case 'Apache':
      return `https://opensource.org/licenses/Apache-2.0`;
    case 'GPLv3':
      return `https://www.gnu.org/licenses/gpl-3.0`;
    case 'GPLv2':
      return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
    case 'BSD2':
      return `https://opensource.org/licenses/BSD-2-Clause`;
    case 'BSD3':
      return `https://opensource.org/licenses/BSD-3-Clause`;
    case 'Eclipse':
      return `https://opensource.org/licenses/EPL-1.0`;
    case 'Mozilla':
      return `https://opensource.org/licenses/MPL-2.0`;
    case 'IBM':
      return `https://opensource.org/licenses/IPL-1.0`;
    case 'Perl':
      return `https://opensource.org/licenses/Artistic-2.0`;
    case 'Artistic':
      return `https://opensource.org/licenses/Artistic-2.0`;
    case 'None':
      return ``;
    };
      
};

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
      return ``;
    } else {
      return `## License
  This project is licensed under the ${license} License. 
  ${renderLicenseLink(license)}`;
  };
};

// A function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
${renderLicenseBadge(data.license)}
  
## Description
${data.description}

## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [Credits](#Credits)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Credits

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions or feedback, please contact me via:
- GitHub: [${data.username}](https://github.com/${data.username})
- Email: [${data.email}](mailto:${data.email})

This README was generated with ❤️ by README_Generator`;
};

module.exports = generateMarkdown;
