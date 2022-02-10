// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "None"){
    return ""
  } else {
    return "https://img.shields.io/badge/license-"+ license +"-orange?style=plastic=appveyor"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ""
  } else {
    return "https://opensource.org/licenses/" + license
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  } else {
    renderLicenseBadge;
    renderLicenseLink
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  
  console.log(data) 
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ![License Badge](https://img.shields.io/badge/license-${data.license}-orange?style=plastic=appveyor?raw=true)
  <br>
  [Click here for more information regarding the above license](https://opensource.org/licenses/${data.license})
  ---
  ## How to Contribute

  ## Tests

  ## Questions
  
  If you have any questions contact information can be found at https://github.com/${data.userName}

`;
}

module.exports = generateMarkdown;
