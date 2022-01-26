/*
pair sum

Write a function, pairSum, that takes in an array and a target sum as arguments. The function should return an array containing a pair of indices whose elements sum to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair that sums to the target.
test_00:

pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]

test_01:

pairSum([4, 7, 9, 2, 5, 1], 5); // -> [0, 5]

test_02:

pairSum([4, 7, 9, 2, 5, 1], 3); // -> [3, 5]
*/

// brute force
const pairSum = (numbers, targetSum) => {
  let store = {};

  for (let i = 0; i < numbers.length; i++) {
    let currNumber = numbers[i];
    if (currNumber in store) return [store[currNumber], i];
    let difference = targetSum - currNumber;
    store[difference] = i;
  }
};
