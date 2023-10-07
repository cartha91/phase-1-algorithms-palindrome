  // 'isPalindrone' should take one argument,
  // that argument should be a string,
  // check entered string for palindrone,
  // if string is palindrome return true,
  // if string is not palindrone return false
  
  function isPalindrome(word) {
  let changedWords = word.toLowerCase().replace(/[^a-z0-9]/gi, '');

  let invertedWords = changedWords.split('').reverse().join('');

  return changedWords === invertedWords;
}

/* 
  change the entered word to lowercase and get rid of all characters that are not letters

  invert the changed word

  now check to see if the inverted word matches the original word

  console.log true or false based on the entered string 
*/

/*
  first 'isPalindrome accepts an argument then proceeds to change that string into an all lowercase string as well as remove any characters that are not letters. 
  .toLowerCase handles changing the case while .replace will handle the type of character. Next the function will make a new copy of our changed word, reverse it, then
  check to see if the two words match. last we will see a return value of true if the word matched and false if it did not.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  /*
    describe('isPalindrome', function() {
    it('should return true for "mom"', function() {
        assert.isTrue(isPalindrome('abba'));
    });

  */
 console.log("Expecting: true");
 console.log("=>", isPalindrome("mom"));
 
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
