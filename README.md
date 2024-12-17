# Uncommon Stack Overflow Error in Euclid's Algorithm

This repository demonstrates an uncommon stack overflow error that can occur in a seemingly simple implementation of Euclid's algorithm for finding the greatest common divisor (GCD) of two numbers.  The issue arises from the lack of a base case to handle zero inputs, resulting in infinite recursion.

## Bug Description
The JavaScript function `foo` implements Euclid's algorithm. However, it fails when either `a` or `b` is 0, causing infinite recursion and ultimately a stack overflow error.  This is an uncommon error because the algorithm itself is quite straightforward, and the edge case involving zero is often overlooked.

## Bug Solution
The solution involves adding a base case to check for zero values for both `a` and `b`. If either is zero, the function returns the other value. This handles the case gracefully preventing the infinite recursion.

## How to Run
1. Clone this repository.
2. Open `bug.js` to see the buggy implementation.
3. Open `bugSolution.js` to see the corrected implementation.
4. Run both files using a JavaScript environment (like Node.js). Observe the difference in behavior.
