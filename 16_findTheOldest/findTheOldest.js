function calculateAge(person) {
  if (person.yearOfDeath) {
    return person.yearOfDeath - person.yearOfBirth
  } else {
    return new Date().getFullYear() - person.yearOfBirth
  }
}

const findTheOldest = function (people) {
  return people.reduce((highestAgePerson, curPerson) => {
    let curAge = calculateAge(curPerson)
    let highestAge = calculateAge(highestAgePerson)

    if (curAge > highestAge) {
      highestAgePerson = curPerson
    }
    return highestAgePerson
  })
}

// Do not edit below this line
module.exports = findTheOldest
