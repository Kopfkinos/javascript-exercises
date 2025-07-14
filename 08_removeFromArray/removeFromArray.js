const removeFromArray = function (arr, ...elementsToRemove) {
  return arr.filter((arrItem) => !elementsToRemove.includes(arrItem))
}

// Do not edit below this line
module.exports = removeFromArray
