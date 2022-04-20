const moment = require('moment-timezone')

function convertHumanDateToTimestamp (humanDate) {
  return moment(humanDate, "YYYY-MM-DD HH:mm:ss").valueOf()
}

function convertTimestampToHumanDate (timestamp) {
  return moment(Number(timestamp)).format("YYYY-MM-DD HH:mm:ss")
}

module.exports = { 
  convertHumanDateToTimestamp,
  convertTimestampToHumanDate,
}
