#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('\nMay I have your name? ');
console.log(`Hello, ${name}!`);
