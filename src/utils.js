export default (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const isPrime = (num) => {
  if (num === 2) return true;
  if (num % 2 === 0 || num <= 1) return false;
  const iter = (i) => {
    if (i > Math.sqrt(num)) return true;
    if (num % i === 0) return false;
    return iter(i + 2);
  };
  return iter(3);
};

export const nod = (a, b) => {
  if (a === b) return a;
  if (a > b) {
    return nod(a - b, b);
  }
  return nod(a, b - a);
};
