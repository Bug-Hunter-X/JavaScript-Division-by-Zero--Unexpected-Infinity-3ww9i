# JavaScript Division by Zero: Unexpected Infinity

This repository demonstrates a common, yet subtle, error in JavaScript related to division by zero.  The function `foo` is intended to return 0 if either `a` or `b` is 0. However, it does not handle the case of dividing by zero correctly; instead of throwing an error or returning `NaN`, it returns `Infinity`. This can lead to unexpected results in larger programs.

The `bug.js` file contains the buggy code. The `bugSolution.js` file provides a corrected version that explicitly checks for division by zero and handles it gracefully.

## Bug
Dividing by zero in JavaScript results in `Infinity`, which may not always be the intended behavior.  The bug lies in the implicit handling of division by zero without a check for the divisor being 0.

## Solution
The improved version explicitly checks if `b` is zero before performing the division, avoiding the `Infinity` result and either returning 0 or throwing an error depending on the requirement.