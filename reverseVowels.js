// In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position.
function reverseVowels(str) {
    const vowels = str.match(/[aeiou]/gi);
    const result = str.replace(/[aeiou]/gi, () => vowels.pop());
    return result
  }
