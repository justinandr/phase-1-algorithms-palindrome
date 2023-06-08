function isPalindrome(word) {
  let wordArray = []
  for (e of word){
    wordArray.unshift(e)
  }
  let newWord = wordArray.join('')
  console.log(newWord)

  if (word === newWord){
    return true
  }
  else {
    return false
  }
}

/* 
  - call isPalindrome passing a string 
  - declare a new, empty string
  - iterate over the passed-in string backwards assigning each element to the new string as you go
  - compare and return the appropriate boolean value
*/

/*
  My approach is to create a new string using the one provided in the arguement of the isPalindrome 
  function and compare the two
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
