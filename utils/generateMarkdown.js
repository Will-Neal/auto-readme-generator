//Generates the link that displays the license badge
function renderLicenseBadge(license) {
    let licenseBadge = `https://img.shields.io/badge/license-${license}-orange?style=plastic=appveyor?raw=true`
    return licenseBadge
  }


//Generates the link that has more information on the chosen license
function renderLicenseLink(license) {
    let licenseSearch = license.replaceAll("_", "-") //Replaces underscores with dashes because shield.io uses underscores 
    let licenseLink = `https://opensource.org/licenses/${licenseSearch}`
    return licenseLink
  }


//calls the two other license functions (badge and link) to generate the links and then uses template literals to complete the string for the license section of the README
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

//Function that generates the actual markdown string. First calls the renderLicenseSection function so that it can then pass the return from that into the license section via a template literal.
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

//exports this function for use in the other javascript files
module.exports = generateMarkdown;
