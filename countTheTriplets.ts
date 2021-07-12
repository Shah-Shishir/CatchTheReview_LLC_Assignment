const countTheTriplets = (array: number[], n: number): number => {
  const arrayLength = array.length;
  let count = 0;

  for (let i = 0; i < arrayLength; i++) {
    for (let j = i + 1; j < arrayLength; j++) {
      for (let k = j + 1; k < arrayLength; k++) {
        if (array[i] + array[j] + array[k] < n) {
          ++count;
        }
      }
    }
  }

  return count;
};

console.log(countTheTriplets([-2, 0, 1, 3], 2));
console.log(countTheTriplets([5, 1, 3, 4, 7], 12));
