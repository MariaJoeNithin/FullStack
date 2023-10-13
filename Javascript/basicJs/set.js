let s = new Set();
const obj1 = {A:1};
const obj2 = {B:2};
const obj3 = {C:4};

s.add(obj1);
s.add(obj2);
s.add(obj3);
console.log(s);
console.log(s.has(obj3));
s.delete(obj3);
console.log(s.has(obj3));
console.log(s.size);
s.clear();
console.log(s);

s.add(obj1);
s.add(obj2);
s.add(obj3);

for (let l of s.keys()) {
    console.log(l);
}
for (let l of s.entries()) {
    console.log(l);
}
for (let l of s.values()) {
    console.log(l);
}