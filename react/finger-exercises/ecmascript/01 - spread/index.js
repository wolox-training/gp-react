import { isArray } from './utils';

export function min(numbers) {
  if (isArray(numbers)) {
    return Math.min(...numbers);
  }

  return Math.min(numbers);
}

export function copy() {

}
