function sumFibonacci(num) {
    if (num == 1) {
      return 1;
    }
    var a = 0;
    var b = 1;
    var result = 0;
    while (b <= num) {
      if (b % 2 !== 0) {
        result += b;
      }
      b += a;
      a = b - a;
    }
    return result;
  }
  console.log(sumFibonacci(1));
  console.log(sumFibonacci(10));
  console.log(sumFibonacci(20));
  console.log(sumFibonacci(4));
  console.log(sumFibonacci(-5));
  module.exports = sumFibonacci;
  
