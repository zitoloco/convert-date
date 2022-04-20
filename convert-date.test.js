const {
  convertHumanDateToTimestamp,
  convertTimestampToHumanDate,
} = require('./convert-date')

test('convert human date to timestamp', () => {
  expect(convertHumanDateToTimestamp('2022-04-20 21:53:40')).toBe(1650502420000)
  expect(convertHumanDateToTimestamp('2022-09-30 10:20:30')).toBe(1664544030000)
})

test('convert timestamp to human date', () => {
  expect(convertTimestampToHumanDate(1650502420000)).toBe('2022-04-20 21:53:40')
  expect(convertTimestampToHumanDate(1664544030000)).toBe('2022-09-30 10:20:30')
})
