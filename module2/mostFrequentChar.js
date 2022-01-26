/*
most frequent char

Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

You can assume that the input string is non-empty.
test_00:

mostFrequentChar('bookeeper'); // -> 'e'

test_01:

mostFrequentChar('david'); // -> 'd'
*/

// brute force
const mostFrequentChar = (s) => {
  let counter = {};
  let maximum = -Infinity;
  let returnChar;

  for (let char of s) {
    if (!(char in counter)) counter[char] = 0;
    counter[char] += 1;
  }

  for (let char in counter) {
    if (counter[char] > maximum) {
      maximum = counter[char];
      returnChar = char;
    }
  }

  return returnChar;
};

// solution
const mostFrequentChar = (s) => {
  const count = {};
  for (let char of s) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }

  let best = null;
  for (let char of s) {
    if (best === null || count[char] > count[best]) {
      best = char;
    }
  }

  return best;
};
