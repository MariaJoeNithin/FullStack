let x = {name:"OFSD",count:20};
let y = JSON.stringify(x);
console.log(y);
console.log(typeof(y));
let s = "[1,2,3,4]";
let p = JSON.parse(s);

console.log(s);
console.log(p);
console.log(typeof(s));
console.log(typeof(p));
console.log(p[1]);