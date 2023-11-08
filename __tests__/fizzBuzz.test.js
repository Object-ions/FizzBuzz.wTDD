import {fizzBuzz}  from '../src/js/fizzBuzz.js';

describe('fizzBuzz', () => {
  it ('should be a function', () => {
    expect(typeof fizzBuzz).toEqual('function');
  })
});