// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseBadge = `https://img.shields.io/badge/license-${license}-orange?style=plastic=appveyor?raw=true`
    return licenseBadge
  }


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let licenseSearch = license.replace("_", "-") //Replaces underscores with dashes because shield.io uses underscores 
    let licenseLink = `https://opensource.org/licenses/${licenseSearch}`
    return licenseLink
  }


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ""
  } else {
    licenseBadge = renderLicenseBadge(license);
    licenseURL = renderLicenseLink(license)
    return `## License

  ![License Badge](${licenseBadge})
  <br>
  
  [Click here for more information regarding the above license](${licenseURL})
    
  ---
    
  `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let licenseSection = renderLicenseSection(`${data.license}`)
  // let licenseURL = renderLicenseLink(`${data.license}`)  
  // console.log(data) 
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

  ${licenseSection}

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
