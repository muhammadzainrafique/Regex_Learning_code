
//Regular expressions defines a search pattern can be used to search for things in a string

//using test method

// let sentence = "The dog chased the cat."
// let regex = /the/
// console.log(regex.test(sentence));

// let myString = "Hello, World!"
// let myRegex = /Hello/;

// let result = myRegex.test(myString); 
// console.log(result);


//Match literal Strings

// let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
// let waldoRegex = /Waldo/
// console.log(waldoRegex.test(waldoIsHiding));


//Match a Literal String with Different Possibilities

// let petString ="James has a pet cat."
// let petRegex = /cat|dog|fish|bird/  //  |this is as or operator
// console.log(petRegex.test(petString));

//Case Ignore

// let myString = "freeCodeCamp"
// let regex = /freecodecamp/i     //i will ignore the case it will match alphabets not cases
// console.log(regex.test(myString))

//Extract Matches  =>to nikalna something from the string
// let string = "Nikalo the word 'coding' from this string."
// let regex = /coding/
// console.log(string.match(regex));

//Find more than the first match => g is used to find more than one time of word
// let string = "Twinkle, twinkle, little star"
// let regex = /twinkle/ig
// console.log(string.match(regex));

//Match Anything with wildcard Period (.) = >it can stand for anything
// let string = "Bear hug, I will hum a song"
// let regex = /hu./g
// console.log(string.match(regex));

//Match a single character with multiple possibilities
// let string = "Beware of bug In the above code"
// let regex = /b[aiu]g/
// let vowelRegex = /[aeios]/ig
// console.log(string.match(regex));
// console.log(string.match(vowelRegex));

//Match Letters of the Alphabets
// let string = "The quick brown fox jumps ove the lazy dog."
// let regex = /[a-z]/ig
// console.log(string.match(regex));

//Match numbers and Letter
// let string = "The value of Pie is 3.141592636"
// let regex = /[a-i7-9]/ig
// console.log(string.match(regex));

//Match single characters not specified => that we not want to match
// let string = "3 blind mice.."
// let regex = /[^0-9aeiou]/ig
// console.log(string.match(regex));

//Match character that Occur One or More Times
// let string = "Mississipspi"
// let regex = /s+/g
// console.log(string.match(regex));

//Match Characters that Occur Zero or More Times => ( * ) is used to check zero or more time
// let string = "gooooooooooal"
// let otherString = "gut feeling"
// let regex = /go*/
// console.log(string.match(regex));
// console.log(otherString.match(regex));

//Find Characters with lazy matching

//lazy match will show characters till first possible match   => ti
//greedy match show characters till the last possible match   => titani
// let string = "titanic"
// let regex = /t[a-z]*i/
// let lazyRegex = /t[a-z]*?i/
// console.log(string.match(regex));
// console.log(string.match(lazyRegex));

//Find one or more criminals in hunt
// let string = "P1P2P3P4P5P6CCCP7P8P9"
// let regex = /C+/   //C is crimnal
// console.log(string.match(regex));

//Match Beginning String Patterns  => ( ^ ) is to check the beiging pattern
// let string = "Cal and Ricky both like racing."
// let regex = /^Cal/i
// console.log(regex.test(string));

//Match Ending String Patterns => ( $ ) is to check the ending string pattern
// let string = "The last car on a train is the caboose"
// let regex = /caboose$/
// console.log(regex.test(string));

//Match all Letters and Numbers  => \w is used to match all letters and numbers
// let string = "The value of pie is 3.1415"
// let regex = /\w/g
// console.log(string.match(regex).length);

//Match EveryThing But letters => \W is used to match all characters other than letters and numbers and underscore
let string = "The value of pie___3.1415"
let regex = /\W/g
console.log(string.match(regex));