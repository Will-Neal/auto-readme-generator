// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "None"){
    return ""
  } else {
    console.log("renderLicenseSearch")
    console.log(license)
    return "https://img.shields.io/badge/license-"+ license +"-orange?style=plastic=appveyor"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "None") {
    return ""
  } else {
    licenseSearch = license.replace("_", "-")
    return licenseSearch
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  } else {
    renderLicenseBadge(license);
    renderLicenseLink(license)
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseURL = renderLicenseLink(`${data.license}`)  
  console.log(data) 
  return `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)

  ## Installation
  
  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ![License Badge](https://img.shields.io/badge/license-${data.license}-orange?style=plastic=appveyor?raw=true)
  <br>

  [Click here for more information regarding the above license](https://opensource.org/licenses/${licenseURL})
  
  ---
  ## How to Contribute

  ${data.contribute}
  
  ## Tests

  ${data.test}

  ## Questions
  
  If you have any questions contact the creator at:
  <br>
  [${data.email}](mailto:${data.email})
  <br>
  [GitHub](https://github.com/${data.userName})

`;
}

module.exports = generateMarkdown;
