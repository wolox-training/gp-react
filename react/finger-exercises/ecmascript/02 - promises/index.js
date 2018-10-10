// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(delayTime) {
  return new Promise((resolve, reject) => {
    const myLimit = 500 * 500;
    if (delayTime < myLimit) {
      setTimeout(() => {
        resolve(delayTime);
      }, delayTime);
    } else {
      reject(new Error('This time is too much !'));
    }
  });
}

export function asyncDelay(delayTime) {
  return delay(delayTime);
}
