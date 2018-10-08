import { isArray } from './utils';

export function min(...numbers) {
  if (numbers.length === 0) {
    return undefined;
  }

  if (numbers.length === 1) {
    if (isArray(numbers[0])) {
      return Math.min(...numbers[0]);
    }

    return numbers[0];
  }

  return Math.min(...numbers);
}

export function copy(myObject) {
  if (isArray(myObject)) {
    return myObject.slice();
  }

  return { ...myObject };
}
