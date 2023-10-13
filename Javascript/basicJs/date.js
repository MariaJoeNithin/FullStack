let dt = new Date();
console.log(dt);

console.log(dt.getFullYear());
console.log(dt.getMonth());
console.log(dt.getDate());
console.log(dt.getDay());
console.log(dt.getHours());
console.log(dt.getMinutes());
console.log(dt.getSeconds());
console.log(dt.getMilliseconds());
console.log(dt.getTime());

// month from 0 to 11
// Day from 0 to 6

dt.setFullYear(1998);
dt.setMonth(7);
dt.setDate(25);
dt.setHours(12);

console.log(dt.getFullYear());
console.log(dt.getMonth());
console.log(dt.getHours());
console.log(dt.getDate());
console.log(dt.getDay());