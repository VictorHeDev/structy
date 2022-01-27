/*
intersection

Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.
test_00:

intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]

test_01:

intersection([2,4,6], [4,2]) // -> [2,4]

Approach
- use a Set for constant lookup time
- use the Set methods .has() and .add()
*/

// brute force
const intersection = (a, b) => {
  let store = {};
  let resultArr = [];
  for (let num of a) store[num] = true;

  for (let num of b) {
    if (num in store) resultArr.push(num);
  }
  return resultArr;
};

// solution
const intersection = (a, b) => {
  const result = [];
  const items = new Set();

  for (let item of a) {
    items.add(item);
  }

  for (let ele of b) {
    if (items.has(ele)) result.push(ele);
  }

  return result;
};