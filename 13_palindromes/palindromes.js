const palindromes = function (str) {
  str = str.toLowerCase()
  const onlyLetters = str.match(/[a-z0-9]+/g).join("")
  const lastIndex = onlyLetters.length - 1
  const halfLength = Math.ceil(lastIndex / 2)
  let isPalindrome = true
  for (let i = 0; i < halfLength; i++) {
    if (onlyLetters[i] !== onlyLetters[lastIndex - i]) {
      isPalindrome = false
      break
    }
  }
  return isPalindrome
}

// Do not edit below this line
module.exports = palindromes
