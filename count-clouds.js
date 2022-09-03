/*
Given a 2D grid that represents a map of the sky, count the number of clouds. A cloud is represented as a group of 1's connected horizontally or vertically.

Input
sky = [
    [0, 1, 1, 0],
    [1, 1, 0, 1],
    [0, 0, 1, 0],
    [1, 1, 1, 0]
]
Output: 3
*/

function countClouds(arr) {
  let counter = 0;

  const countAdjOnes = (i, j) => {
    if (
      i >= 0 &&
      i < arr.length &&
      j >= 0 &&
      j < arr[i].length &&
      arr[i][j] == 1
    ) {
      arr[i][j] = "c";
      countAdjOnes(i + 1, j); //bottom
      countAdjOnes(i, j + 1); //right
      countAdjOnes(i - 1, j); //top
      countAdjOnes(i, j - 1); //left
    }
  };

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 1) {
        counter++;
        countAdjOnes(i, j);
      }
    }
  }

  return counter;
}

// Following test should return 3.
console.log(
  countClouds([
    [0, 1, 1, 0],
    [1, 1, 0, 1],
    [0, 0, 1, 0],
    [1, 1, 1, 0],
  ])
);
