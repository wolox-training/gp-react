import pow from '.';

describe('01 - matchers', () => {
  it('pow returns the power based on two numeric arguments', () => {
    expect(pow(2,2)).toBe(4);
  });
  it('pow returns undefined if there are no arguments', () => {
    expect(pow()).toBeUndefined();
  });
  it('pow returns undefined if there is just one argument', () => {
    expect(pow(2)).toBeUndefined();
  });
  it('pow returns an array of power results if an array of pairs are sent as arguments', () => {
    expect(pow([2, 2], [3, 3])).toContain(4);
    expect(pow([2, 2], [3, 3])).toContain(27);
  });
  xit('pow returns undefined in the right position of the result array if pair is not as expected', () => {
  });
});
