// function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.Title}
  
  ## ${data.Description}

  ## ${data.ToC}

`;
}

module.exports = generateMarkdown;
