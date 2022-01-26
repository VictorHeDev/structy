/*
uncompress

Write a function, uncompress, that takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern:

<number><char>

for example, '2c' or '3a'.

The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. You may assume that the input string is well-formed according to the previously mentioned pattern.
*/

const uncompress = (s) => {
  let resultArr = [];
  let i = 0;

  for (let j = 0; j < s.length; j++) {
    if (!isNum(s[j])) {
      let range = Number(s.slice(i, j));
      for (let k = 0; k < range; k++) resultArr.push(s[j]);
      i = j + 1;
    }
  }

  return resultArr.join('');
};

const isNum = (candidate) => {
  return candidate >= '0' && candidate <= '9';
};
