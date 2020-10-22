// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.Title}
  
 
  ## Description
  
  ${data.Description}

  ## Table of Contents
  1.  [Installation](#Installation)
  1.  [Usage](#Usage)
  1.  [Contributions](#Credit)
  1.  [Tests](#Test)
  1.  [Questions](#Question)
  1.  [License](#License)
  ## Installation

  ${data.Install}

  ## Usage

  ${data.Usage}

  ## Contributions

  ${data.Credit}

  ## Tests

  ${data.Test}

  ## Questions

  ${data.Question}

  ## Credit

  [@${data.Credit}](https://github.com/${data.Credit})

  ## License

  ${data.license}
`;
}

module.exports = generateMarkdown;
