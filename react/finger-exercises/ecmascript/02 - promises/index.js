// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(delayTime) {
  return new Promise(((resolve) => {
    setTimeout(() => {
      resolve(delayTime);
    }, delay);
  }));
}

export function asyncDelay(delayTime) {
  return new Promise(((resolve) => {
    setTimeout(() => {
      resolve(delayTime);
    }, delay);
  }));
}
