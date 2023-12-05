let ns = new Map();
ns.set("name","OFSD");
ns.set("count",253);
console.log(ns.get("name"));
ns.set("group","A");
console.log(ns.get("group"));
console.log(ns)
for(let x of ns)
{
    console.log(x);
}

// get()
// set()
console.log(ns.size);
console.log(ns.has("count"));
ns.delete("group")
for(let x of ns)
{
    console.log(x);
}
console.log(ns.has("group"));

ns.clear();
for(let x of ns)
{
    console.log(x);
}
console.log(ns.has("count"));

const obj1 = {name:"ofsd",batch:2023};
let m = new Map();
m.set(obj1,1);
console.log(m);
let k = new Map([["OFSD23C",30],["OFSD23D",10],["OFSD23E",20]]);
for(let l of k)
{
    console.log(l);
}

console.log(k.keys());
console.log(k.values());
console.log(k.entries());

for(let l of k.keys())
{
    console.log(l);
}
for(let l of k.values())
{
    console.log(l);
}
for(let l of k.entries())
{
    console.log(l);
}

console.log("\n");

let js={"name":"OFSD","batch":"noon"};

let mj=new Map(Object.entries(js));
for(let l of mj)
{
    console.log(l);
}

console.log("\n");

let batch = new Map();
batch.set("name","OFSD").set("count",10);
for(let l of batch)
{
    console.log(l);
}
let obj2=Object.fromEntries(batch);
console.log(obj2);