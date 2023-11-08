import {fizzBuzz}  from '../src/js/fizzBuzz.js';

describe('fizzBuzz', () => {
  it ('should be a function', () => {
    expect(typeof fizzBuzz).toEqual('function');
  });
  it ('should return the number if not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(17)).toEqual(17);
  });
});