const removeAdjacentDuplicates = (str: string): string => {
  const end: number = str.length - 1;
  const start: number = end > 0 ? end - 1 : end;
  const result: string = getResult(str, start, end);
  return result;
};

const getResult = (str: string, start: number, end: number): string => {
  if (start === 0) {
    if (str[0] === str[1]) {
      return str.substr(2);
    }
    return str;
  }

  if (str[start] !== str[end]) {
    end = start;
  } else {
    str = str.substring(0, start) + str.substring(end + 1);
  }

  start = start > 0 ? start - 1 : start;

  return getResult(str, start, end);
};

console.log(removeAdjacentDuplicates("Hello Spartaan"));
console.log(removeAdjacentDuplicates("aaaa"));
console.log(removeAdjacentDuplicates("aaaabcdfgaaaa"));
console.log(removeAdjacentDuplicates("a"));
console.log(removeAdjacentDuplicates("a "));
console.log(removeAdjacentDuplicates(" a "));
