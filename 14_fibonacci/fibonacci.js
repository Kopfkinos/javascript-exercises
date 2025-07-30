const fibonacci = function (num) {
  num = Number(num)
  if (num < 0 || isNaN(num)) {
    return "OOPS"
  }

  if (num === 0) {
    return 0
  }
  let currentFibNum = 1
  let lastFibNum = 0
  let secondLastFibNum = 0
  for (let i = 1; i < num; i++) {
    secondLastFibNum = lastFibNum
    lastFibNum = currentFibNum
    currentFibNum = secondLastFibNum + lastFibNum
  }
  return currentFibNum
}

// Do not edit below this line
module.exports = fibonacci
