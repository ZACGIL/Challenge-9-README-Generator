function renderLicenseBadge(license) {
  if(license === 'Add your own later')
    return '';
  if(license === 'Apache 2.0 License')
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  if (license === 'IBM Public License Version 1.0')
    return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/license/ibmpl-php)'
  if (license === 'The MIT License')
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

}

function renderLicenseLink(license) {
  if(license === 'Add your own later')
    return '';
  if(license === 'Apache 2.0 License')
    return 'https://opensource.org/licenses/Apache-2.0'
  if (license === 'IBM Public License Version 1.0')
    return 'https://opensource.org/license/ibmpl-php'
  if (license === 'The MIT License')
    return 'https://opensource.org/licenses/MIT'
}

function renderLicenseSection(license) {
  if(license === 'Add your own later')
    return 'Will be added in future';
  else
    return `This application is covered under ${license} viewable at ${renderLicenseLink(license)}
  `
  ;
}

function generateMarkdown(data) {

  return `# ${data.title} 

  ${renderLicenseBadge(data.license)}

  ## Table of Contents 

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ## License

  ${renderLicenseSection(data.license)}

  ## Questions

  For any queries view my GitHub profile at: https://github.com/${data.github}

  For any additional questions please contact: ${data.email}`
  ;
}

module.exports = generateMarkdown;
