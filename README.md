# Workout Tracker
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg) 

![image](https://user-images.githubusercontent.com/80925456/139867966-db6d6f89-aac0-4a9d-b4d1-63b8272888f5.png)

Live Link: https://intense-ocean-00622.herokuapp.com/

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with) 
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)

## About the Project

>Full-stack application that allows users to log resistance and cardio workouts, saving the workouts to a database and allowing them to be compared to previously saved workouts

### Built With
- HTML 
- CSS 
- JavaScript 
- Node 
- Express 
- MongoDB 
- Mongoose 
- Morgan 
- MongoDB Atlas 
- Heroku

## Installation

Run the following command to install necessary dependencies:

```javascript
npm run install
```

## Usage

1. Creating a 'New Workout' 
    - Clicking 'New Workout' will allow the user to choose between 'resistance' and 'cardio' workout types. 
    - After type is chosen, workout infomation can be entered to save to the database. 
      - 'Complete' will log the added exercise as a finished workout and return the user to the homepage 
      - 'Add Exercise' will save the currently entered information to the current workout and then allow the user to input another workout 
2. Updating previous workout with 'Continue Workout' 
    - Clicking 'Continue Workout will allow the user to input workout information as before, updating and saving to the most recent workout 
3. Workout 'Dashboard' 
    - Clicking 'Dashboard' in the navbar will display the past 7 saved workouts and compare them in duration and exertion

## License

This project is licensed under the MIT license

## Questions

**Project Creator:** [BMore-Creative](https://github.com/BMore-Creative)

*Feel free to contact me at bamore404@gmail.com for any questions, comments, or suggestions.*
