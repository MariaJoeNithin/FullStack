const batch ={ name:'ram' ,id:123};
const id=Symbol();
batch.id=154;
console.log(batch);
batch[id]='111';
console.log(batch);
for(let x in batch)
{
    console.log(x);
}
// let id1=Symbol.for("hello");
// let id2=Symbol.for("hello");
// console.log((id1==id2)?true:false);//true because of .for(as it considers it as global )
let id1=Symbol("hello");
let id2=Symbol("hello");
console.log((id1==id2)?true:false);

//symbol.for()
//symbol.keyFor()
//symbol.toSource()
//symbol.toString()
//symbol.valueOf()