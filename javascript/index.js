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

function moveRobot (directionString) {
    const startingPosition = [0, 0];
    let currentPosition = [0, 0];
    let currentDirection = 'n';
  
  
    const directions = directionString.toLowerCase().split('');
    directions.forEach(dir => {
      if(dir === 'g' && currentDirection === 'n') {
        currentPosition[1] += 1
      }
      if(dir === 'g' && currentDirection === 's') {
        currentPosition[1] -= 1
      }
      if(dir === 'g' && currentDirection === 'e') {
        currentPosition[0] += 1
      }
      if(dir === 'g' && currentDirection === 'w') {
        currentPosition[0] -= 1
      }
      if(dir === 'r' && currentDirection === 'n') {
        currentDirection = 'e'
      } else if( dir === 'r' && currentDirection === 'e') {
        currentDirection = 's'
      } else if( dir === 'r' && currentDirection === 's') {
        currentDirection = 'w'
      } else if( dir === 'r' && currentDirection === 'w') {
        currentDirection = 'n'
      }
      if(dir === 'l' && currentDirection === 'n') {
        currentDirection = 'w'
      } else if( dir === 'l' && currentDirection === 'w') {
        currentDirection = 's'
      } else if( dir === 'l' && currentDirection === 's') {
        currentDirection = 'e'
      } else if( dir === 'l' && currentDirection === 'e') {
        currentDirection = 'n'
      }
    })
    return (currentPosition[0] === startingPosition[0] && currentPosition[1] === startingPosition[1])
  }

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
    startingNum.toString().split("").reverse().join(""),
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
}

//FACTORIZE PROMPT
// Create a function that takes a number as its argument and returns an array of all its factors.


// NOTES
// - A factor is a number that evenly divides into another number without leaving a remainder. 
// - Assume the input number will be positive. 
// - Try to implement this both iteratively & recursively if you have time.


//PSEUDOCODE
//add a divider argument that will increment up with each invokation
//define an array to collect factors
//if num divided by divider has no remainder (!%)? push the divider to the array
//return invokation of factorize with div + 1

//if divider > num, return array of factors

function factorize(num, div = 1, factors = []) {
  if(!(num % div) && div <= num) {
    factors.push(div);
    return factorize(num, div + 1, factors)
  } else if(num % div && div <= num) {
    return factorize(num, div + 1, factors)
  } else if(div > num) {
    return factors
  }
}


module.exports = {
  moveRobot,
  paliSum,
  factorize
}