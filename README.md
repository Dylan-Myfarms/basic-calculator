# basic-calculator
A basic calculator.

## Features
  - Basic Mathematic Operations (add, subtract, division, multiplication, modulus, square, square root, powers)
  - Standard Deviation
  - Population Standard Deviation
  - Min (from array)
  - Max (from array)
  - Mode , Median, Mean
  - Simple and Precision rounding
  - Slope
  - Calculate Percentages
  - Random number generation between min/max
  - Assertion Tests

## Installation
`npm install basic-calculator --save`

## Run Tests
`npm test`

## Usage
```javascript
var bc = require('basic-calculator');

// add
bc.add(1,2);
// 3

// subtract
bc.sub(1,2);
//-1

// division
bc.div(1,2);
// 0.5

// multiplication
bc.mult(2,3);
// 6

// modulus
bc.mod(5, 2);
// 1

// power
bc.pow(2,10);
// 1024

// square
bc.sqr(5);
// 25

// square root 
bc.sqrt(49);
// 7

// percent
bc.perc(1, 5);
// 20

// slope
bc.slope([1,-4], [-4, 2]);
// -1.2

// mean
bc.mean([3,4,5,6,7]);
// 5

// median (even length)
bc.median([1,2,3,4]);
// [2,3]

// median (odd length)
bc.median([1,2,3]);
// 2

// mode (no ties)
bc.mode([1,2,3,3,4,5]);
// [3]

// mode (with ties)
bc.mode([1,1,2,3,4,4,5]);
// [1,5]

// max 
bc.max([20,4,1,5,6,29,90]);
// 90

// min
bc.min([12,15,90,11,904,2]);
// 2

// round up 
bc.round(6.5);
// 7

// round down
bc.round(6.49);
// 6

// round to specific number of decimals
bc.roundTo(6.55, 1);
// 6.6

// standard deviation 
bc.sdeviation([9,2,5,4,12,7,8,11,9,3,7,4,12,5,4,10,9,6,9,4]);
// 3.0607876523260447

// population standard deviation
bc.psdeviation([9,2,5,4,12,7,8,11,9,3,7,4,12,5,4,10,9,6,9,4]);
// 2.9832867780352594

// variance of standard deviation rounded to 4 digits
var variance = bc.variance([9,2,5,4,12,7,8,11,9,3,7,4,12,5,4,10,9,6,9,4], 'standard');
var rounded = bc.roundTo(variance, 4);
// 9.3684

// variance of population standard deviation
bc.variance([9,2,5,4,12,7,8,11,9,3,7,4,12,5,4,10,9,6,9,4], 'population');
// 8.9

// random number between 10-100
bc.random(10,100);
// 55

// random number between defaults (1,10)
bc.random();
// 5


```
