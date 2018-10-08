import { isArray } from './utils';

export function min(numbers) {
  if (isArray(numbers)) {
    return Math.min(...numbers);
  }

  const myArgs = arguments;
  if (myArgs.length === 1) {
    return Math.min(myArgs[0]);
  }

  return Math.min(...myArgs);
}

export function copy() {

}
