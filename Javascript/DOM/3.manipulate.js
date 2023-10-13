let div = document.createElement("div");

div.id='online';

div.innerHTML="<div>OFSD23A<div><br>OFSD23B</div></div>"

document.body.appendChild(div);

console.log(document.getElementById("online"));
console.log(document.getElementById("online").textContent);
console.log(document.getElementById("online").firstElementChild.firstElementChild.innerText="OFSD23C");

// textContent considers all elements including hidden elements
// innerText considers only visible elements


let div1 = document.createElement("div");
div1.id='online1';
div1.innerHTML="<div>OFSD23A</div><div><br>OFSD23B</div>"
document.body.appendChild(div1);
console.log(document.getElementById("online1"));

div1.style.backgroundColor="blue";
div1.style.color="black";
div1.style.fontSize="25px";
div1.style.display="flex";
div1.style.height="500px";
div1.style.width="500px";

// console.log(document.getElementById("online1").firstElementChild.innerText="<div>OFSD23A<div><br>OFSD23B</div></div>");

let ele=document.getElementById("mailId");
console.log(ele.getAttribute("name"));

console.log(ele.hasAttribute("disabled"));
ele.removeAttribute("disabled");

console.log(ele.getAttribute("placeholder"));
ele.setAttribute("placeholder","****@gmail.com");

console.log(ele.attributes);

for(let x of ele.attributes)
{
    console.log(`${x.name} = ${x.value}`);
}
