const palindromes = function (str) {
  str = str.toLowerCase()
  const onlyLetters = str.match(/[a-z0-9]+/g).join("")
  const leng = onlyLetters.length - 1
  const middle = Math.ceil(leng / 2)
  let isPalindrome = true
  for (let i = 0; i < middle / 2; i++) {
    if (onlyLetters[i] !== onlyLetters[leng - i]) {
      isPalindrome = false
    }
  }
  return isPalindrome
}

// Do not edit below this line
module.exports = palindromes
