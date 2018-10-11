import { isArray } from './utils';

export function min(...numbers) {
  if (numbers.length === 0) {
    return;
  }

  if (numbers.length > 1) {
    return Math.min(...numbers);
  }

  if (isArray(numbers[0])) {
    // There is only 1 argument and it's an array
    return Math.min(...numbers[0]);
  }

  // There is only 1 argument and it's not an array
  return numbers[0];
}

export function copy(myObject) {
  return isArray(myObject) ? myObject.slice() : { ...myObject };
}

export function reverseMerge(myArray1, myArray2) {
  return [...myArray2, ...myArray1];
}

export function filterAttribs(myObject) {
  const { a, b, ...myReturn } = myObject;
  return myReturn;
}
