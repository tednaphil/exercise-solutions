// RESISTOR COLOR TRIO PROMPT
// Each resistor has a resistance value.
// Manufacturers print color-coded bands onto the resistors to denote their resistance values.

// Each band acts as a digit of a number. For example, if they printed a brown band (value 1) followed by a green band (value 5),
//it would translate to the number 15. In this exercise, you are going to create a helpful program so that you don't have to
//remember the values of the bands. The program will take 3 colors as input, and outputs the correct value, in ohms.
//The color bands are encoded as follows:

    // black: 0
    // brown: 1
    // red: 2
    // orange: 3
    // yellow: 4
    // green: 5
    // blue: 6
    // violet: 7
    // grey: 8
    // white: 9

// In Resistor Color Duo you decoded the first two colors. For instance: orange-orange got the main value 33.
//The third color stands for how many zeros need to be added to the main value.
//The main value plus the zeros gives us a value in ohms. For the exercise it doesn't matter what ohms really are. For example:

    // orange-orange-black would be 33 and no zeros, which becomes 33 ohms.
    // orange-orange-red would be 33 and 2 zeros, which becomes 3300 ohms.
    // orange-orange-orange would be 33 and 3 zeros, which becomes 33000 ohms.

// So an input of "orange", "orange", "black" should return:

    // "33 ohms"

// When we get to larger resistors, a metric prefix is used to indicate a larger magnitude of ohms, such as "kiloohms".
// For example, an input of "orange", "orange", "orange" should return:

    // "33 kiloohms"

type Color = keyof typeof ResistorValues;

enum ResistorValues {
  black,
  brown,
  red,
  orange,
  yellow,
  green,
  blue,
  violet,
  grey,
  white
};

const decodedResistorValue = ([first, second, power]: Color[]) => {
  const base = Number(`${ResistorValues[first]}${ResistorValues[second]}`);
  switch(ResistorValues[power]) {
    case 0:
      return (`${base} ohms`);
    case 1:
      return (`${base * 10} ohms`);
    case 2:
      return (`${base / 10} kiloohms`);
    case 3:
      return (`${base} kiloohms`);
    case 4: 
      return (`${base * 10} kiloohms`);
    case 6:
      return(`${base} megaohms`);
    case 9:
      return (`${base} gigaohms`);
    default:
      return (`${base * (0 ** ResistorValues[power])} ohms`);
  };
};

export default(decodedResistorValue)
