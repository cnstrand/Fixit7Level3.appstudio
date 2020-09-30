let quoteString = "Failure is simply the opportunity to begin again this time more intelligently."
let upperCaseString = quoteString.toUpperCase()
console.log('Upper case string is:', upperCaseString)

let authorString = "- Henry Ford"
let completeString = quoteString + authorString
let found = completeString.includes(authorString)
if(found == true){
  console.log("Henry was in the quote string")}
else{
  console.log("Henry was NOT in the quote string")
  }

secondQuote = "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work. - Stephen King"
lowerCaseString = secondQuote.toLowerCase()
console.log('Lower case string is:', lowerCaseString)

let number = prompt("Please enter the number.")
let numberInt = parseInt(number)
let answer = numberInt + 10
console.log(`The number ${number} + 10 is ${answer}.`)o