let wm = new WeakMap();
// can only contain object as key 
let obj={};
let obj1={};
wm.set(obj,"OFSD");
console.log(wm);
console.log(wm.get(obj));
wm.set(obj1,23);
console.log(wm.has(obj1));
console.log(wm.get(obj1));
wm.delete(obj);
console.log(wm.has(obj));

//Since iteration is not possible size and clear will not work... also .key() .entries() .values() wont work
//Only objects can be given

let ws = new WeakSet();
let obj2={name:"OFSD"};
let obj3={count:25};
ws.add(obj2);
ws.add(obj3);
console.log(ws);
console.log(ws.has(obj3));
ws.delete(obj3);
console.log(ws);
console.log(ws.has(obj3));