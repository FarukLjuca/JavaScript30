// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

var inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
]

var people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William']

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.log("1. Filter the list of inventors for those who were born in the 1500's")

var filteredListOfInventors = inventors.filter(inventor =>
  inventor.year >= 1500 && inventor.year < 1600
)

console.log(filteredListOfInventors)


// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
console.log("2. Give us an array of the inventors' first and last names")

var inventorsFirstAndLastNames = inventors.map(inventor =>
  [inventor.first, inventor.last]
)

console.log(inventorsFirstAndLastNames)


// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.log('3. Sort the inventors by birthdate, oldest to youngest')

var sortedInventorsByBirthdate = inventors.sort((firstInventor, secondInventor) => {
  if (firstInventor.year < secondInventor.year) {
    return 1
  }
  else if (firstInventor.year > secondInventor.year) {
    return -1
  }
  else {
    return 0
  }
})

console.log(sortedInventorsByBirthdate)


// Array.prototype.reduce()
// 4. How many years did all the inventors live?
console.log('4. How many years did all the inventors live?')

var allInventorsYears = inventors.reduce((sum, inventor) =>
  sum + inventor.passed - inventor.year
, 0)

console.log(allInventorsYears)


// 5. Sort the inventors by years lived
console.log('5. Sort the inventors by years lived')

var sortedInventorsByYearsLived = inventors.sort((firstInventor, secondInventor) => {
  var firstInventorYearsLived = firstInventor.passed - firstInventor.year
  var secondInventorYearsLived = secondInventor.passed - secondInventor.year

  if (firstInventorYearsLived < secondInventorYearsLived) {
    return 1
  }
  else if (firstInventorYearsLived > secondInventorYearsLived) {
    return -1
  }
  else {
    return 0
  }
})

console.log(sortedInventorsByYearsLived)


// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
var boulevards = ["Boulevards of Paris", "City walls of Paris", "Thiers wall", "Wall of Charles V", "Wall of Philip II Augustus", "City gates of Paris", "Haussmann's renovation of Paris", "Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard de Rochechouart", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard de la Zone"]

console.log("6. create a list of Boulevards in Paris that contain 'de' anywhere in the name")

var boulevardsWithDe = boulevards.filter(boulevard =>
  boulevard.toLowerCase().indexOf('de') !== -1
)

console.log(boulevardsWithDe)


// 7. sort Exercise
// Sort the people alphabetically by last name
console.log('Sort the people alphabetically by last name')

console.log(people.sort())


// 8. Reduce Exercise
// Sum up the instances of each of these
var data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ]

console.log('Sum up the instances of each of these')

var sumOfInstances = data.reduce((sum, value) => {
  if (sum[value] === undefined) {
    sum[value] = 1
  } else {
    sum[value]++
  }

  return sum
}, {})

console.log(sumOfInstances)