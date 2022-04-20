#!/usr/bin/env node
const inquirer = require('inquirer')
const colors = require('colors/safe')
const {
  convertTimestampToHumanDate, 
  convertHumanDateToTimestamp,
} = require('./convert-date')

colors.enable()

function main() {
  selectConvertion()
}

function selectConvertion() {
  inquirer.prompt(
    {
      type: 'list',
      name: 'convertionType',
      message: 'Select the convertion type:',
      choices: [
        {
          name: 'Human date to timestamp', 
          value: 'human'
        },
        {
          name: 'Timestamp to human date', 
          value: 'timestamp'
        }
      ]
    }
  ).then((answers) => {
    if (answers.convertionType === 'timestamp') {
      inputTimestamp()
    } else {
      inputHumanDate()
    }
  })
}

function inputTimestamp() {
  inquirer.prompt(
    {
      type: 'input',
      name: 'timestamp',
      message: 'Please enter a valid timestamp',
      validate(input) {
        if (/^([0-9]{13}$)/g.test(input)) {
          return true;
        }
  
        throw Error('Please enter a valid timestamp [0-9]{13}');
      },
    }
  ).then((answers) => {
    console.log(
      colors.brightYellow.bold(
        '>',
        convertTimestampToHumanDate(answers.timestamp)
      )
    )
  })
}

function inputHumanDate() {
  inquirer.prompt(
    {
      type: 'input',
      name: 'humanDate',
      message: 'Please enter a valid date',
      validate(input) {
        if (/(^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}$)/g.test(input)) {
          return true;
        }
  
        throw Error('Please enter a valid timestamp YYYY-MM-DD HH:mm:ss');
      },
    }
  ).then((answers) => {
    console.log(
      colors.brightYellow.bold(
        '>',
        convertHumanDateToTimestamp(answers.humanDate)
      )
    )
  })
}

main()
