/*
form named 'ABwhile'
uses 2 while loops
gets cities from user until user is done adding cities
user can use any case mixture for input
cities put into an array named 'cities'
while loop iterates through array and outputs to console in all lower case:
omaha
st. louis
etc....
*/

//Allow user to enter as many cities as they want until they say stop. 
let cityArray = []
let cityInput = prompt('Please enter a city')
while (cityInput != ''){
  cityArray.push(cityInput)
  cityInput = prompt('Please enter a city or enter nothing to end the array.')
  }
i = 0

while (i < cityArray.length){
  console.log(cityArray[i].toLowerCase())
  i +=1
}
