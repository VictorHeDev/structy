/*
anagrams

Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.
test_00:

anagrams('restful', 'fluster'); // -> true

test_01:

anagrams('cats', 'tocs'); // -> false
*/

// brute force
const anagrams = (s1, s2) => {
  let store = {};

  for (let i = 0; i < s1.length; i++) {
    if (store[s1[i]]) {
      store[s1[i]] += 1;
    } else {
      store[s1[i]] = 1;
    }
  }

  for (let j = 0; j < s2.length; j++) {
    if (store[s2[j]]) {
      store[s2[j]] -= 1;
    } else {
      return false;
    }
  }

  return Object.values(store).every((val) => val === 0);
};
