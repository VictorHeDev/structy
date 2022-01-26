from math import sqrt, floor

"""
Course Introduction & Main Concepts
- Difficulties ramp up over time
- In the later stages of the course, there is selective recall from past topics
	in the course
- Step by step

Alvin's Recipe to Success
1. Do problems in order
2. Read prompt
3. Watch the approach & walkthrough videos
	i. Try to attack the problem first. If you can't then watch the approach video first.
	ii. Try to write the code
	iii. If you get stuck, watch the code walkthrough
4. Redo the problem until you don't need to use the approach and walkthrough
5. We want mastery of the current problem before moving on
"""

"""
Max Value
Write a function, maxValue, that takes in an array of numbers as an argument. The function should return the largest number in the array.
You can assume that the array is non-empty
"""

"""
Strategy:
- use an outer value to represent the maximum
	- init to an arbitrarily small value like negative infinity
- iterate through and check if the current is greater than the maximum
- replace the maximum with the current if it is
"""


def maxValue(nums):
	highest = -float("inf")   # or we can use float('-inf')
	for num in nums:
		highest = max(highest, num)
	return highest


"""
is prime
Write a function, is_prime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.
A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

Strategy
- we can check factors up to sqrt(n) only, which can cut down on time complexity

"""

def is_prime(n):
	if n < 2:
		return False
	for i in range(2, floor(sqrt(n) + 1)):
		if n % i == 0:
			return False
	return True
