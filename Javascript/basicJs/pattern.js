let n = 5;

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n-i; j++) {
    document.write("*");
  }
  document.write("<br>");
}