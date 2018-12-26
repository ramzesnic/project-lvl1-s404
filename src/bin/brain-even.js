#!/usr/bin/env node
import getName, { isEven } from '..';

console.log('Welcome to the Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
const name = getName();
console.log(`Hello, ${name}!\n`);
const min = 1;
const max = 100;
const count = 3;
console.log(isEven(count, min, max, name));
