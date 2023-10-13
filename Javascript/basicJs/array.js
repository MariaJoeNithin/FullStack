const arr=[10,20,30];
const b= new Array(1,2,3,4)
document.write(arr);
const c=[];
c[1]="<br> hello";
c[2]="hi";
c[3]=20;
document.write(c);
const newData=[ {'task1' : 'exercise'},[1,2,3] ,function hello(){console.log('hello') ; document.write('hello') } ]
const ara= new Array 
(
[ {'task1' : 'exercise'},[1,2,3] ,function hello(){console.log('hello') ; document.write('hello') } ]
)

const name=['h','e','l','l','o'];

for(i=0;i<5;i++){
    document.write("<br>",name[i]);
    console.log("\n",name[i]);
}
name.push("welcome");
document.write("<br>",name)


name.unshift("get out before ");
document.write("<br>",name)

name[2]="A";
document.write("<br>",name)

name.pop();
document.write("<br>",name)
name.shift();
document.write("<br>",name)

document.write("<br>",name.length)
document.write("<br>",name.sort())
document.write("<br>",name.indexOf("o"))
console.log(name.indexOf("o"))

const fruit=["apple","banana","orange","grape"];
document.write("<br>",fruit.slice(2));
const first_name=['Maria Joe Nithin'],last_name=["J"];
const fullname=first_name.concat(last_name);
console.log(fullname);
document.write("<br>",fullname);