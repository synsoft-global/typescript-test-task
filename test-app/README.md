<!--
Hey, thanks for using the awesome-readme-template template.  
If you have any enhancements, then fork this project and create a pull request 
or just open an issue with the label "enhancement".

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->
<div align="center">

  <h1>Express-Typescript-Boilerplate</h1>
  
  <p>
    A simple Express.js boilerplate server with typescript
  </p>
  


</div>

<br />

<!-- Table of Contents -->
# Table of Contents

- [About the Project](#about-the-project)
  * [Tech Stack](#tech-stack)
  * [Features](#features)
  * [Environment Variables](#environment-variables)
- [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
  * [Linting](#linting)
  * [Run Locally](#run-locally)  
- [License](#license)
- [Contact](#contact)
  

<!-- About the Project -->
## About the Project

<!-- TechStack -->
### Tech Stack

- ***Express.js***
- ***Typescript***
- ***Yarn***


<!-- Features -->
### Features

- ***Package managament*** with Yarn
- ***Testing*** with Jest and Supertest
- ***Cross-Origin Resource-Sharing*** enabled using cors
- ***Secured HTTP Headers*** using helmet
- ***Logging*** with winston
- ***Environment variables*** using dotenv
- ***Compression*** with gzip
- ***Git hooks*** with husky and lint-staged
- ***Linting and enforced code style*** using Eslint and Prettier


<!-- Env Variables -->
### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

`PORT`

`CORS_ORIGIN`

See .env.example for further details

<!-- Getting Started -->
## Getting Started

<!-- Prerequisites -->
### Prerequisites

This project uses Yarn as package manager

```bash
 npm install --global yarn
```

<!-- Installation -->
### Installation

```bash
  git clone https://github.com/synsoft-global/typescript-test-task.git
```

Go to the project directory

```bash
  cd express-ts-boilerplate
```

```bash
  yarn install
```

### Linting

```bash
  # run ESLint
  yarn lint
  
  # fix ESLint errors
  yarn lint:fix

  # run prettier
  yarn code:check

  # fix prettier errors
  yarn code:format
  
  # fix prettier errors in specific file
  yarn code:format:specific-file <file-name>
```
   
<!-- Run Locally -->
### Run Locally

Start the server in development mode

```bash
  yarn dev
```

Start the server in production mode

```bash
  yarn start
```
<!-- License -->
## License

Distributed under the MIT License. See LICENSE.txt for more information.