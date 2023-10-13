let a= document.getElementById("one")
console.log(a);

let b=document.getElementsByName("gender");
console.log(b);

let c=document.getElementsByTagName("h1");
console.log(c);

let d=document.getElementsByClassName("item");
console.log(d);

for(let e of Object.values(d))
{
    console.log(e);
}

let f=document.getElementById("menu");
let g=f.getElementsByClassName("item");
console.log(g);

f.style.color = 'blue' ;

// select parent 

let e1= document.querySelector(".OFSC23C");

let pe = e1.parentNode;
let pe1 = e1.parentElement;
console.log(pe);
console.log(pe1);

console.log(e1);

// select child 

let e2=document.getElementById("batches");
console.log(e2.firstElementChild);
console.log(e2.lastElementChild);
console.log(e2.children);

// select sibling 

e3=document.querySelector(".current");

console.log(e3.nextElementSibling);
console.log(e3.previousElementSibling);

let nxtsib=e3.nextElementSibling;

while(nxtsib)
{
    console.log(nxtsib);
    nxtsib=nxtsib.nextElementSibling;
}

let presib=e3.previousElementSibling;

while(presib)
{
    console.log(presib);
    presib=presib.previousElementSibling;
}

// print all sibling 

let nextgen=e3.nextElementSibling;
let sibling=[];
while(nextgen)
{
    sibling.push(nextgen);
    nextgen=nextgen.nextElementSibling;
}

let prevgen=e3.previousElementSibling;

while(prevgen)
{
    sibling.push(prevgen);
    prevgen=prevgen.previousElementSibling;
}

    console.log(sibling);
