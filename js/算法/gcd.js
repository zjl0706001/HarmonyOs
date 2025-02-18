let gcd1 = (a, b) => {
  while ((b ^= a ^= b ^= a %= b));
  return a;
};
let gcd2 = (a, b) => (b > 0 ? gcd2(b, a % b) : a);
let lcm = (a, b) => (a * b) % gcd2(a, b);
