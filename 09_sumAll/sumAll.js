const sumAll = function (a, b) {
  const args = [a, b]

  const invalidArgs = args.some((arg) => {
    return arg < 0 || typeof arg !== "number" || arg % 1 !== 0
  })

  if (invalidArgs) {
    return "ERROR"
  }

  const bigger = Math.max(a, b)
  const smaller = Math.min(a, b)

  let sum = 0
  for (let i = smaller; i <= bigger; i++) {
    sum += i
  }
  return sum
}

// Do not edit below this line
module.exports = sumAll
