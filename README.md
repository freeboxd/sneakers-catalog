
<!-- PROJECT LOGO -->
<br />
<p align="center">
<img src="images/trustly-logo.png" alt="Trustly Logo" width="160" height="160">
  <h3 align="center">Trustly Frontend Challenge</h3>
  <p align="center">
    Sneaker e-commerce application developed for Trustly.</a>
    <br />
    <a href="https://trustly-frontend-challenge-6o25fa3ba-freeboxd.vercel.app/">View Demo</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#development">Development</a></li>
    <li><a href="#build">Build</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Trustly App Name Screen Shot][product-screenshot]

This project was developed as a challenge proposed by Trustly and it should test my skills as a Frontend Developer.

### Built With

* [React](https://reactjs.org/)
* [Next.js](https://nextjs.org/)
* [Styled Components](https://styled-components.com/)
* [Typescript](https://www.typescriptlang.org/)
* [Eslint](https://eslint.org/)
* [Eslint](https://prettier.io/)



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

To run this project, you will need Node.js and Yarn installed. Node v12.13.0 is <strong>recommended</strong>.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/freeboxd/trustly-frontend-challenge.git
   ```
3. Install NPM packages
   ```sh
   yarn install
   ```
4. Create a new `.env.local` file at the root directory and enter the URL for the Sneakers JSON list:
   ```
   SNEAKERS_API_URL=http://localhost:3000/api/sneakers
   ```
   <small>The port may vary depending on your machine. Make sure it is the same as the one displayed at the </small>



<!-- DEVELOPMENT -->
## Development

To start the development server, open the project in the terminal and run `yarn dev`. You will be able to access it at `http://localhost:3000` if the 3000 port is not already being used by your machine.

Another useful command is `yarn lint`, for checking lint errors with Eslint.

_For more information, please refer to the [Next.js Documentation](https://nextjs.org/docs/)_



<!-- BUILD -->
## Build

To build this project, you will need the sneakers list url (SNEAKERS_API_URL @ .env) working so that Next.js pre-fetches it when building. If you are using the development server as suggested in the installation, you will need to run `yarn dev` to start the API server and then `yarn build` to build the project.

Do not forget to create an `.env` (production environment) for the app build!

[product-screenshot]: images/project-screenshot.png