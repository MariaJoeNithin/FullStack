function factorial(n) {
    if (n == 0) {
      return 1;
    }
  
    return n * factorial(n - 1);
  }
  n = prompt("Enter the input to get factorial : ");
  result = factorial(n);
  console.log(result);