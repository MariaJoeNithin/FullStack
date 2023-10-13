let a=5,b=10;

document.write("<br>",a+b);
document.write("<br>",a-b);
document.write("<br>",a*b);
document.write("<br>",a/b);
document.write("<br>",a**b);
document.write("<br>",b**(1/a));


document.write("<br>",'a'+b+5);
document.write("<br>",a+'b'+5);
document.write("<br>",a+b+'5');
document.write("<br>",'a'**5);
document.write("<br>",b**'a');

let energy= {
    valueOf(){
        return 100;
    },//comma not mandatory
};

let currentEnergy=energy-10;
document.write("<br>",currentEnergy);

currentEnergy=energy+100;
document.write("<br>",currentEnergy);

currentEnergy=energy/10;
document.write("<br>",currentEnergy);

currentEnergy=energy%10;
document.write("<br>",currentEnergy);

let remainder = Infinity%2;
document.write("<br>",remainder);

remainder = Infinity%Infinity;
document.write("<br>",remainder);

remainder = 0%Infinity;
document.write("<br>",remainder);

remainder = Infinity%0;
document.write("<br>",remainder);

remainder = 10%0;
document.write("<br>",remainder);

remainder = 0%10;
document.write("<br>",remainder);

remainder = '10'%0;
document.write("<br>",remainder);

remainder = 0% '10' ;
document.write("<br>",remainder);

remainder = '10'%3 ;
document.write("<br>",remainder);
const mod =(divident,divisor) => ((divident%divisor)+divisor)%divisor;

//Dividen v divisor

document.write('<br> remainder : ',5 % 3);
document.write('<br> modulo : ',mod(5 , 3));

// document.write('<br> remainder : ',-5 % 3);
// document.write('<br> modulo : ',mod(-5 , 3));

// document.write("<br> Modulo : ",((5%3)+3)%3);  //Ref
// document.write("<br> Modulo : ",((-5%3)+3)%3);   //Ref

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a**b);
console.log(b**(1/a));