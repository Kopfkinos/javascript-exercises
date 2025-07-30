const palindromes = function (str) {
  str = str.toLowerCase()
  const onlyLetters = str.replace(/[^a-z0-9]+/g, "")
  const reversedLetters = onlyLetters.split("").reverse().join("")

  console.log(onlyLetters, reversedLetters)
  return onlyLetters === reversedLetters ? true : false
}

// Do not edit below this line
module.exports = palindromes
