// function to generate markdown for README
function generateMarkdown(data, userInfo) {
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
  
  ![Developer Profile Picture](${userInfo.avatar_url}) 

   You can contact me [@${data.Email}](https://${data.Email})  


  [@${data.Username}](https://github.com/${data.Username})

  ## Credit

  [@${data.Credit}](https://github.com/${data.Credit})

  ## License

  ${data.License}

  ![Badge for GitHub](https://img.shields.io/github/languages/top/${data.Username}/${data.Repository}?style=flat&logo=appveyor) 
`;
}

module.exports = generateMarkdown;
