const largestRectangle = (array: number[]): number => {
  const arrayLength = array.length;

  if (arrayLength === 1) {
    return array[0] * 2;
  }

  let maxHeight = 0,
    minimum = 0;

  for (let i = 0; i < arrayLength - 1; i++) {
    minimum = Math.min(array[i], array[i + 1]);
    maxHeight = Math.max(maxHeight, minimum);
  }

  return maxHeight * 2;
};

console.log(largestRectangle([1, 1]));
console.log(largestRectangle([1, 1, 1]));
console.log(largestRectangle([0]));
console.log(largestRectangle([2, 1, 5, 6, 2, 3]));
console.log(largestRectangle([2, 1]));
console.log(largestRectangle([2]));
console.log(largestRectangle([2, 1, 5]));
console.log(largestRectangle([]));
console.log(largestRectangle([10, 11, 12, 13, 14, 15]));
console.log(largestRectangle([10, 11, 12, 13, 14, 15, 1, 0, 25]));
