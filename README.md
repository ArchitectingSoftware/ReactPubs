## Introduction

The purpose of this project is to demonstrate some ReactJS concepts in my graduate software design class.

This project requires an API endpoint for my publication service API to be running.  You can get this
from my PublicationServiceNodeJS-es6 project.

Enjoy!

## Usage

To start the project type `node app.js`. the project bootstraps and starts running on port 5000. Note when you
first download this you will likely have to run `npm install` to pull down all of the nodejs and webpack
dependencies. 


## Properties

This is a demonstration application and uses webpack along with Babel to prepare the application.  It is not
intended to be production ready.  Notice that the webpack development server sets up a proxy in `server.js` that
is harded coded to redirect all API calls to localhost:3000 - this is the place where the API must be running
(unless you change the code in `server.js` to redirect elsewhere.