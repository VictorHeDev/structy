/*
pair product

Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.
test_00:

pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]

test_01:

pairProduct([3, 2, 5, 4, 1], 10); // -> [1, 2]
*/

const pairProduct = (numbers, targetProduct) => {
  let store = {};

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] in store) return [store[numbers[i]], i];
    let quotient = targetProduct / numbers[i];
    store[quotient] = i;
  }
};
