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

export function reverseMerge(myArray1, myArray2) {
  const myReversedArray = copy(myArray2);
  myReversedArray.push(...myArray1);
  return myReversedArray;
}

export function filterAttribs(myObject) {
  const dontAllowed = ['a', 'b'];
  return Object.keys(myObject).filter(key => !dontAllowed.includes(key)).reduce((obj, key) => {
    const myNewObj = obj;
    myNewObj[key] = myObject[key];
    return myNewObj;
  }, {});
}
