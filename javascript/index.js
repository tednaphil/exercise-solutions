//ROBOT PROMPT
//In this challenge, you are working with a computer simulation of a mobile robot.
//The robot moves on a plane, and its movements are described by a command string consisting of one or more
//of the following letters:

// G instructs the robot to move forward one step
// L instructs the robot to turn left
// R instructs the robot to turn right

//The robot CANNOT go backwards - poor robot.
//After running all of the movement commands, you want to know if the robot returns to its original starting location.

// returnToOrigin("GRGL")
//     => false

//PSEUDOCODE
//convert argument into array of single chars
//iterate through the movement operations
//use [x,y] coordinates to track robots position
//if currentDirection = north then G will increment y (currentPosition[1]) up by 1
//if currentDirection = south then G will increment y (currentPosition[1]) down by 1
//if currentDirection = east then G will increment x (currentPosition[0]) up by 1
//if currentDirection = west then G will increment x (currentPosition[0]) down by 1
//if we receive R and current direction is north, currentDirection will be reassigned to 'e' -> so on for rest of directions
//if we receive an L and current direction is north, current Direction will be reassigned to 'w' -> so on for the rest of directions

function moveRobot(directionString) {
  const startingPosition = [0, 0];
  let currentPosition = [0, 0];
  let currentDirection = "n";

  const directions = directionString.toLowerCase().split("");
  directions.forEach((dir) => {
    if (dir === "g" && currentDirection === "n") {
      currentPosition[1] += 1;
    }
    if (dir === "g" && currentDirection === "s") {
      currentPosition[1] -= 1;
    }
    if (dir === "g" && currentDirection === "e") {
      currentPosition[0] += 1;
    }
    if (dir === "g" && currentDirection === "w") {
      currentPosition[0] -= 1;
    }
    if (dir === "r" && currentDirection === "n") {
      currentDirection = "e";
    } else if (dir === "r" && currentDirection === "e") {
      currentDirection = "s";
    } else if (dir === "r" && currentDirection === "s") {
      currentDirection = "w";
    } else if (dir === "r" && currentDirection === "w") {
      currentDirection = "n";
    }
    if (dir === "l" && currentDirection === "n") {
      currentDirection = "w";
    } else if (dir === "l" && currentDirection === "w") {
      currentDirection = "s";
    } else if (dir === "l" && currentDirection === "s") {
      currentDirection = "e";
    } else if (dir === "l" && currentDirection === "e") {
      currentDirection = "n";
    }
  });
  return (
    currentPosition[0] === startingPosition[0] &&
    currentPosition[1] === startingPosition[1]
  );
};

// PALISUM PROMPT
// Write a method/function that starts at 0 and finds the first twenty-five numbers where the number plus its inverse equals a palindrome that is greater than 1,000.

// 47(number) + 74(inverse) = 121(palindrome) Note: This does not meet the greater than 1,000 rule.

// Collect the twenty-five numbers in an array as the return value. Be sure to collect the number and not the sum.

//PSEUDOCODE:
//output: array of 25 numbers that when added to their inverse produce a palindrome greater 1000

//create an empty array to store paliNums
//define starting number (0) and assign as default value for num argument
//increment starting number +1

// convert number to string, reverse, convert back to integer
// add starting number to converted & reversed number - store sum
//evaluate sum against converted, reversed, converted sum
//if that's a palindrome && > 1000 && paliSum array.length < 25, paliSum array. push startingNumber

// if paliSum.length === 25, return paliSum array

//Refactor notes
//create converter function??
//use a while loop??

function paliSum(num = 0, arr = []) {
  let startingNum = num;
  const paliNums = arr;
  let reverseNum = parseInt(
    startingNum.toString().split("").reverse().join("")
  );
  let sum = startingNum + reverseNum;
  let isPalindrome =
    sum === parseInt(sum.toString().split("").reverse().join(""));

  if (paliNums.length === 25) {
    return paliNums;
  } else if (isPalindrome && sum > 1000 && paliNums.length < 25) {
    paliNums.push(startingNum);
    return paliSum((startingNum += 1), paliNums);
  } else {
    return paliSum((startingNum += 1), paliNums);
  }
};

//FACTORIZE PROMPT

// Create a function that takes a number as its argument and returns an array of all its factors.

// NOTES
// - A factor is a number that evenly divides into another number without leaving a remainder.
// - Assume the input number will be positive.
// - Try to implement this both iteratively & recursively if you have time.

//PSEUDOCODE:
//add a divider argument that will increment up with each invokation
//define an array to collect factors
//if num divided by divider has no remainder (!%)? push the divider to the array
//return invokation of factorize with div + 1

//if divider > num, return array of factors

// ITERATIVE SOLUTION:
// function factorize(num) {
//   const factors = [];
//   for (let i = 0; i <= num; i++){
//     if(num % i === 0){
//       factors.push(i)
//     }
//   };
//   return factors
// };

// RECURSIVE SOLUTION:

function factorize(num, div = 1, factors = []) {
  if (!(num % div) && div <= num) {
    factors.push(div);
    return factorize(num, div + 1, factors);
  } else if (num % div && div <= num) {
    return factorize(num, div + 1, factors);
  } else if (div > num) {
    return factors;
  }
};

//STEPS COLLATZ PROMPT
// Instructions
// The Collatz Conjecture or 3x+1 problem can be summarized as follows:

// Take any positive integer n. If n is even, divide n by 2 to get n / 2.
//If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely.
//The conjecture states that no matter which number you start with, you will always reach 1 eventually.

// Given a number n, return the number of steps required to reach 1.

// Examples
// Starting with n = 12, the steps would be as follows:

// 12
// 6
// 3
// 10
// 5
// 16
// 8
// 4
// 2
// 1
// Resulting in 9 steps. So for input n = 12, the return value would be 9.

// If n is not a positive integer, stop the program from being executed further and return an error message.

//PSEUDOCODE:
//input: positive integer greater than zero and incrementer/counter with default value of zero
//output: integer

//evaluate if number is even or odd
//if num === 1, return counter
//if not,
//perform respective collatz operations and assign product to outcome variable
//then return invocation of function passing outcome and counter +1

const steps = (num, counter = 0) => {
  let isOdd = num % 2;
  if (num <= 0) {
    throw new Error("Only positive numbers are allowed");
  } else if (num === 1) {
    return counter;
  } else if (isOdd) {
    return steps(num * 3 + 1, counter + 1);
  } else if (!isOdd) {
    return steps(num / 2, counter + 1);
  }
};

//PERFECT NUMBER PROMPT:
// Determine if a number is perfect, abundant, or deficient based on Nicomachus' (60 - 120 CE) classification scheme for positive integers.

// The Greek mathematician Nicomachus devised a classification scheme for positive integers, identifying each as belonging uniquely to the
//categories of perfect, abundant, or deficient based on their aliquot sum. The aliquot sum is defined as the sum of the factors of a number
//not including the number itself. For example, the aliquot sum of 15 is 1 + 3 + 5 = 9.

//PSEUDOCODE:
//input: number
//output: string
//Loop to find factors of a number (omitting the number itself)
//if current index is a factor, add to factors array
//define a variable to store the aliquot sum
//iterate through the factors array returned
//increment the aliquotSum variable by adding each element of the factors array
//if the aliquot sum is greater than the num, return "abundant"
//if less than, "deficient"
//if equal to, "perfect"

const classify = (num) => {
  if (num <= 0) {
    throw new Error("Classification is only possible for natural numbers.");
  }
  const factors = [];
  for (let i = 0; i < num; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  let aSum = 0;
  factors.forEach((factor) => (aSum += factor));
  if (aSum > num) {
    return "abundant";
  } else if (aSum < num) {
    return "deficient";
  } else if (aSum === num) {
    return "perfect";
  }
};

module.exports = {
  moveRobot,
  paliSum,
  factorize,
  steps,
  classify,
};
