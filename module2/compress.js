/*
compress

Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

'aaa' compresses to '3a'
'cc' compresses to '2c'
't' should remain as 't'

You can assume that the input only contains alphabetic characters.
test_00:

compress('ccaaatsss'); // -> '2c3at3s'

test_01:

compress('ssssbbz'); // -> '4s2bz'
*/

const compress = (s) => {
  let result = [];
  let i = 0;
  let j = 0;
  // the <= will make the s[i] out of bounds
  // the special feature of js is that s[i] will be undefined
  // undefined is !== lastChar, so this is still valid code
  while (j <= s.length) {
    if (s[i] === s[j]) {
      j += 1;
    } else {
      num = j - i;
      if (num === 1) {
        result.push(s[i]);
      } else {
        // .push comma separated will add both elements (cleaner code!)
        result.push(num, s[i]);
      }
      i = j;
    }
  }

  return result.join('');
};
