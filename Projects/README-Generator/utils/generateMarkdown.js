// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${response.title}

  ## Description
  ${response.description}

  ## Table of Contents
  [Description](#description)
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contribution](#contribution)
  [Test](#test)
  [Questions](#questions)

  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}

  ## License
  ${response.license}

  ## Contribution
  ${response.contribution}

  ## Test
  ${response.test}
  
  ## Questions
  For any other questions you can reach me through my Email or Github:
  Email: ${response.email}
  GitHub: https://github.com/{response.username}


`;
}

module.exports = generateMarkdown;
