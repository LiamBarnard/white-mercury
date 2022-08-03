const getSleepHours = day => {
  if (day === 'Monday') {
    return 8
  } else if (day === 'Tuesday') {
    return 7
  } else if (day === 'Wednesday') {
    return 6
  } else if (day === 'Thursday') {
    return 9
  } else if (day === 'Friday') {
    return 7
  } else if (day === 'Saturday') {
    return 7
  } else if (day === 'Sunday') {
    return 6
  }
}

const getActualSleepHours = () => {
  return getSleepHours('Monday') +
  getSleepHours('Tuesday') +
  getSleepHours('Wednesday') +
  getSleepHours('Thursday') +
  getSleepHours('Friday') +
  getSleepHours('Saturday') +
  getSleepHours('Sunday')
}

console.log(getActualSleepHours());

const getIdealSleepHours = () => {
  let idealHours = 8
  return idealHours * 7
}

const calculateSleepDebt = () => {
  var actualSleepHours = getActualSleepHours()
  var idealSleepHours = getIdealSleepHours()
  if (actualSleepHours === idealSleepHours) {
    return 'You got the perfect amount of sleep!'
  } else if (actualSleepHours > idealSleepHours) {
    return 'You got more sleep than you need.'
  } else if (actualSleepHours < idealSleepHours) {
    return 'Go to bed, you have not slept enough!'
  }
}

console.log(calculateSleepDebt())