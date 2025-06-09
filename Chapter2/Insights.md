# Chapter 2. Program Structure

## Question 1. Looping a triangle

Write a loop that makes seven calls to console.log to output the following triangle:

```
#
##
###
####
#####
######
#######
```

### Solution insights

Initially I totally ignored the insturction that we have to make exact `console.log()` calls to print this pattern.
And I applied 2 for loops as we used to do in other languages, totaly ignoring the fact that every console.log would result in printing the symbol on next line every time it is called.

Also, the clever use of concatination operator as well as `.lenght` property here.

```js
for (let i = "#"; i.length < 7; i += "#") console.log(i);
```

## Question 2: FizzBuzz

Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

### Solution

#### Trivial Approach

I started with the obvious if-else chain approach to solve this problem so the code I wrote was as follows

```js
for (let num = 1; num <= 100; num++) {
  if (num % 15 === 0) {
    console.log("FizzBuzz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(num);
  }
}
```
But the book hints a **clever** approach to solve this problem where a String is to be built first and with the clever use of `||` operator the we can print the desired string.

#### Clever Approach

```js
for (let num = 1; num <= 100; num++) {
  let output = '';
  if (num % 3 === 0) {
    output += 'Fizz';
  }
  if (num % 5 === 0) {
    output += 'Buzz';
  }
  console.log(output || num);
}
```

Here, for every value of `num` we are initializing the `output` as empty string. Then we are checking condition for the divisiblity by 3 and appending the output string with `Fizz` similary for 5.

**Why this apporach is desired**
Because this apporach is **extensible**
even we add some more conditions to it the code can handle it easily. For example if the no is divisible by 7 print `Bang` if and the other combintaions that would arise.
Secondly, the **elegant handling of fallback** using `||` operator.  

## Question 3: Chessboard

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:
```
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
```
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.