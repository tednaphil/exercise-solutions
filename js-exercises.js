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
  
  console.log(moveRobot("GRGL"))
  console.log(moveRobot("GRGRGRG"))