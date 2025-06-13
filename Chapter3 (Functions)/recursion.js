/**
 * We’ve seen that we can use % (the remainder operator) to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

Zero is even.

One is odd.

For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

 */

function isEven(num) {
  if (num < 0) {
    return "invalid input";
  }
  if (num === 0) {
    return true;
  } else if (num === 1) {
    return false;
  } else {
    const result = isEven(num - 2);
    return result;
  }
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// invalid input

//*** in this code the main take away was the use of result as a container to hold all the values that would be popping back form recursive calls */
