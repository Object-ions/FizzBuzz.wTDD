import {fizzBuzz}  from '../src/js/fizzBuzz.js';

describe('fizzBuzz', () => {
  it ('should be a function', () => {
    expect(typeof fizzBuzz).toEqual('function');
  });
  it ('should return the number if not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toEqual(1);
    expect(fizzBuzz(17)).toEqual(17);
  });
  it ('should return "Fizz" if divisible by 3', () => {
    expect(fizzBuzz(3)).toEqual('Fizz');
    expect(fizzBuzz(6)).toEqual('Fizz');
    expect(fizzBuzz(12)).toEqual('Fizz');
  });
  it ('should return "FizzBuzz" if divisible by 5', () => {
    expect(fizzBuzz(15)).toEqual('FizzBuzz');
    expect(fizzBuzz(30)).toEqual('FizzBuzz');
    expect(fizzBuzz(45)).toEqual('FizzBuzz');
  });
});