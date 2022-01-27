/*
five sort

Write a function, fiveSort, that takes in an array of numbers as an argument. The function should rearrange elements of the array such that all 5s appear at the end. Your function should perform this operation in-place by mutating the original array. The function should return the array.

Elements that are not 5 can appear in any order in the output, as long as all 5s are at the end of the array.
test_00

fiveSort([12, 5, 1, 5, 12, 7]);
// -> [12, 7, 1, 12, 5, 5]

test_01

fiveSort([5, 2, 5, 6, 5, 1, 10, 2, 5, 5]);
// -> [2, 2, 10, 6, 1, 5, 5, 5, 5, 5]
*/

// brute force
const fiveSort = (nums) => {
  let startIdx = 0;
  let endIdx = nums.length - 1;

  while (endIdx > startIdx) {
    if (nums[endIdx] !== 5) {
      if (nums[startIdx] === 5) {
        swap(startIdx, endIdx, nums);
        endIdx -= 1;
        startIdx += 1;
      } else {
        startIdx += 1;
      }
    } else {
      endIdx -= 1;
    }
  }
  return nums;
};

const swap = (i, j, array) => {
  [array[i], array[j]] = [array[j], array[i]];
};

// solution
const fiveSort = (nums) => {
  let startIdx = 0;
  let endIdx = nums.length - 1;

  while (endIdx >= startIdx) {
    if (nums[endIdx] === 5) {
      endIdx -= 1;
    } else if (nums[startIdx] === 5) {
      swap(startIdx, endIdx, nums);
      startIdx += 1;
    } else {
      startIdx += 1;
    }
  }
  return nums;
};

const swap = (i, j, array) => {
  [array[i], array[j]] = [array[j], array[i]];
};
