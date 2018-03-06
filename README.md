# MassDEP Public Water Supplier Document Search
[https://massgov.github.io/MassDEP/build/](https://massgov.github.io/MassDEP/build/)
 
A React app widget for searching for and downloading documents related to 
Public Water Supplier systems operations. The React components are derived from 
and styled using [Mayflower](https://github.com/massgov/mayflower), the enterprise design system for the Commonwealth
of Massachusetts. 

## Getting Started

The MassDEP Public Water Supplier Document Search widget is a React application 
built with Create React App. To install a local copy of this project follow 
the directions below.

### Prerequisites
* NodeJS 6.12.3 (https://nodejs.org/en/download)
* npm 5.5.1 (npm is included with NodeJS)
* Composer 1.3.2 (https://getcomposer.org)

### Installing

Clone the repo
```
$ git clone https://github.com/massgov/MassDEP.git
```
Install Composer dependencies
```
$ cd MassDEP
$ composer install
```
Install npm dependencies
```
$ npm install
```
Build Mayflower Artifacts
```
$ npm run build-mayflower-artifacts
```
Run the app locally
```
$ npm start
```
## Mass.gov Drupal Implementation
1. In any node type that supports iFrames,
2. Click on `Add iFrame`,
3. Use `http://massgov.github.io/MassDEP` as the iFrame source.
