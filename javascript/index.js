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

const moveRobot = (directionString) => {
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

const paliSum = (num = 0, arr = []) => {
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

const factorize = (num, div = 1, factors = []) => {
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

//MILLIONS OF NUMBERS PROMPT

// You are given three arrays of equal size. Each array has 1 million RANDOM integer values.

// Assume that each array is already sorted in ascending order and that no individual array has any duplicate values.

// Your goal is to write a method/function that will return an array of any/all values which are present in all three arrays.

// Bonus: Once you’ve found a working solution, try to optimize to run in O(n) time and 1x space complexity.

// Small Scale Example Below

//     #JavaScript
//     nums1 = [1, 2, 4, 5, 8]
//     nums2 = [2, 3, 5, 7, 9]
//     nums3 = [1, 2, 5, 8, 9]
//     findMatches(nums1, nums2, nums3)
//     => [2, 5]

// PSEUDOCODE

//compile list of numbers present in all three arrays
//if no matches, return empty array?

//input 3 arrays of nums
//output array of nums present in all three arg arrays

//iterate through arr1 with filter for
    //if arr 2 & arr 3 include current num

const findMatches = (arr1, arr2, arr3) => {
  const matches = arr1.filter(num => {
      return arr2.includes(num) && arr3.includes(num)
  });
  return matches
};

// const findMatches = (arr1, arr2, arr3) => {
//   const accArray = [...arr1, ...arr2, ...arr3];
//   const elementCount = {};
//   const matches = [];
//   for (const num of accArray) {
//     if(!elementCount[num]){
//       elementCount[num] = 0
//     }
//     elementCount[num] += 1
//   };
//   for (const key of Object.keys(elementCount)) {
//     if(elementCount[key] === 3) {
//       matches.push(Number(key))
//     }
//   };
//   return matches
// };

//PROTEIN TRANSLATION PROMPT

// Translate RNA sequences into proteins.

// RNA can be broken into three nucleotide sequences called codons, and then translated to a polypeptide like so:

// RNA: "AUGUUUUCU" => translates to

// Codons: "AUG", "UUU", "UCU" => which become a polypeptide with the following sequence =>

// Protein: "Methionine", "Phenylalanine", "Serine"

// There are 64 codons which in turn correspond to 20 amino acids; however, all of the codon sequences and resulting amino acids are not important in this exercise. If it works for one codon, the program should work for all of them. However, feel free to expand the list in the test suite to include them all.

// There are also three terminating codons (also known as 'STOP' codons); if any of these codons are encountered (by the ribosome), all translation ends and the protein is terminated.

// All subsequent codons after are ignored, like this:

// RNA: "AUGUUUUCUUAAAUG" =>

// Codons: "AUG", "UUU", "UCU", "UAA", "AUG" =>

// Protein: "Methionine", "Phenylalanine", "Serine"


// Below are the codons and resulting Amino Acids needed for the exercise.

// Codon	Protein
// AUG	Methionine
// UUU, UUC	Phenylalanine
// UUA, UUG	Leucine
// UCU, UCC, UCA, UCG	Serine
// UAU, UAC	Tyrosine
// UGU, UGC	Cysteine
// UGG	Tryptophan
// UAA, UAG, UGA	STOP


// If an invalid character or codon is encountered during translation, it should throw an error with the message Invalid codon.


//PSEUDOCODE:
//input: string (codons)
//output: array of strings (protein names)
//define object literal with codon translations (UUU: Phenylalanine, etc)
//define accumulating array
//use for loop to iterate through codon string, incrementing i up 3 each loop
  //concat codonInput i, i+1, i+2
  //if concatenated string === UAA or UAG or UGA reassign i to codonInput.length,\;
  //if the codon translation doesn't exist, throw an error;
  //otherwise push the value of the concatenated string key in the translation object to the accumulating array
// return the accumulated array

const translate = (codonInput) => {
  const translator = {
    AUG: 'Methionine',
    UUU: 'Phenylalanine',
    UUC: 'Phenylalanine',
    UUA: 'Leucine',
    UUG: 'Leucine',
    UCU: 'Serine',
    UCC: 'Serine',
    UCA: 'Serine',
    UCG: 'Serine',
    UAU: 'Tyrosine',
    UAC: 'Tyrosine',
    UGU: 'Cysteine',
    UGC: 'Cysteine',
    UGG: 'Tryptophan',
    UAA: 'STOP',
    UAG: 'STOP',
    UGA: 'STOP'
  };
  let proteins = [];
  if(!codonInput) {
    return proteins
  };
  for(let i = 0; i < codonInput.length; i += 3 ) {
    let codon = codonInput[i] + codonInput[i + 1] + codonInput[i + 2];
    if(translator[codon] === 'STOP'){
      i = codonInput.length
    } else if(!translator[codon]){
      throw new Error('Invalid codon')
    } else {
      proteins.push(translator[codon])
    }
  }
  return proteins
};

//JUICESHOP PROMPT

/**
 * Determine how long it takes to prepare a certain juice.
 * 
 * 'Pure Strawberry Joy' takes 0.5 minutes, 'Energizer' and 'Green Garden' take 1.5 minutes each,
 * 'Tropical Island' takes 3 minutes and 'All or Nothing' takes 5 minutes.
 * For all other drinks (e.g., special offers) you can assume a preparation time of 2.5 minutes.
 *
 * 
 * ANNOTATION
 * input:
 *  {string} name of juice
 * output:
 *  {number} time in minutes
 * 
 * if the param matches any provided case, return the respective prep time in minutes
 * all other cases return the time of 2.5
*/
const timeToMixJuice = (name) => {
  switch(name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
      return 1.5;
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5
  }
};

/**
 * Calculate the number of limes that need to be cut
 * to reach a certain supply.
 * 
 * She can get 6 wedges from a 'small' lime, 8 wedges from a 'medium' lime and 10 from a 'large' lime.
 * She always cuts the limes in the order in which they appear in the list, starting with the first item.
 * She keeps going until she reached the number of wedges that she needs or until she runs out of limes.
 *
 * ANNOTATION
 * input: 
 *  {number} wedgesNeeded
 *  {string[]} lime inventory (sizes)
 * output:
 *  {number} number of limes cut
 * 
 * declare a variable to count wedges that have been cut with an initial value of 0
 * declare an incrementer variable to count the loops through the limes array with an initial value of 0
 * loop through the limes array while i is less than or equal to the length of limes array
 * return i and stop the loop if
 *    wedges is equal to or greater than the wedgesNeeded param OR
 *    all limes have been cut (i is equal to the length of the limes array)
 * declare switch case block that will evaluate the current element in the limes array (limes at index position i)
 *    increment wedges up the respective amount then break (if limes[i] is 'small', add 6 to wedges variable)
 * increment i up by one to move to the next element of the limes array
 * 
 */
const limesToCut = (wedgesNeeded, limes) => {
  let wedges = 0;
  let i = 0;
  while (i <= limes.length) {
    if (wedges >= wedgesNeeded || i === limes.length) {
      return i
    };
    switch(limes[i]) {
      case 'small':
        wedges += 6
        break;
      case 'medium':
        wedges += 8
        break;
      case 'large':
        wedges += 10
        break;
    };
    i++;
  };
};

/**
 * Determine which juices still need to be prepared after the end of the shift.
 * 
 * To make the hand-over easier, implement a function which takes the number of minutes left in Li Mei's shift
 * and an array of juices that have been ordered but not prepared yet.
 * The function should return the orders that Li Mei cannot start preparing before the end of her workday.

 * The time left in the shift will always be greater than 0. The array of juices to prepare will never be empty.
 * Furthermore, the orders are prepared in the order in which they appear in the array. If Li Mei starts to mix
 * a certain juice, she will always finish it even if she has to work a bit longer.
 * If there are no remaining orders left that Dmitry needs to take care of, an empty array should be returned.
 *
 * ANNOTATION
 * input:
 *  {number} timeLeft
 *  {string[]} orders
 * output:
 *  {string[]} remaining orders when no time remaining
 * 
 * execute the following while the timeLeft param is greater than 0:
 *    define switch/case block to evaluate the first element in the orders array
 *        decrement timeLeft based on the respective case and break
 *    remove the first element from the orders array (shift)
 * once timeLeft is less than or equal to 0 (i.e. not greater than 0), return the orders array
 */
const remainingOrders = (timeLeft, orders) => {
  do {
    switch(orders[0]) {
    case 'Pure Strawberry Joy':
      timeLeft -= 0.5
      break;
    case 'Energizer':
      timeLeft -= 1.5
      break;
    case 'Green Garden':
      timeLeft -= 1.5
      break;
    case 'Tropical Island':
      timeLeft -= 3
      break;
    case 'All or Nothing':
      timeLeft -= 5
      break;
    default:
      timeLeft -= 2.5
      break;
    }
  orders.shift()
  } while (timeLeft > 0)
  return orders
};

function pizzaPrice(pizza, ...extras) {
  const prices = {
    ExtraSauce: 1,
    ExtraToppings: 2,
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10
  };
  let price = prices[pizza];

  if(!extras.length) {
    return price
  } else {
    let extrasPrice = prices[extras[0]]
    extras.splice(0, 1)
    return pizzaPrice(pizza, ...extras) + extrasPrice
  }
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * input array of pizza orders
 * returns number the price of the total order
 */
function orderPrice(pizzaOrders) {
  let total = 0;
  if(!pizzaOrders.length) {
    return total
  } else {
    let price = pizzaPrice(pizzaOrders[0].pizza, ...pizzaOrders[0].extras);
    pizzaOrders.splice(0, 1)
    return price + orderPrice(pizzaOrders)
  }
}



module.exports = {
  moveRobot,
  paliSum,
  factorize,
  steps,
  classify,
  findMatches,
  translate,
  timeToMixJuice,
  limesToCut,
  remainingOrders,
  pizzaPrice,
  orderPrice
};
