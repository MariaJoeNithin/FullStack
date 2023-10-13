let a=5,b=10;
++a;
console.log(a);
document.write("<br> a    ",a);
document.write("<br> a++  ",a++);
document.write("<br> ++a  ",++a);

a=5,b=2;

document.write("<br> a    ",a);
document.write("<br> b    ",b);
document.write("<br> a=+b    ",a=+b);
a=5,b=2;
document.write("<br> a-=b    ",a=-b);
a=5,b=2;
document.write("<br> a*=b    ",a*=b );
a=5,b=2;
document.write("<br> a/=b    ",a/=b);
a=5,b=2;
document.write("<br> a%=b    ", a%=b );
a=5,b=2;
document.write("<br> a**=b    ",a**=b );
a=5,b=2;


//and , or , not Logical Operator

a=4;
b=8; 

document.write("<br>", (a==b)&&(a<b));
document.write("<br>", (a==b)||(a<b));
document.write("<br>", (a==b)||(a<b));
c=(a==b)||(a<b);

console.log("c=(a==b)||(a<b); ", c  );
document.write("<br>  ", c  );

