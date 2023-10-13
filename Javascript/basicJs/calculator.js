let a,b,c,d,e;
a=Number( prompt("Enter Value a ",a));
b=Number (prompt("Enter Value b ",b));
c=Number (prompt("Enter Value operation 1.add 2.Sub 3.Multiply 4.divide 5.power ",c));

switch(c)

{
    case 1:
    {
        d=a+b;
        break;
    }
    case 2:
    {
        d=a-b;
    }
    case 3:
    {
        d=a*b;
    }
    case 4:
    {
        d=a/b;
    }
    case 5:
    {
        d=a**b;
    }
    default :
    {
        console.log("Invalid Input");
        document.write("Invalid Input");
    }
}

document.write( " " ,d);
console.log(" " ,d);


if(c==1)
{
    d=a+b;
    e="a+b";
}
else if(c==2)
{
    d=a-b;
    e="a-b";

}
else if(c==3)
{
    d=a*b;
    e="a*b";

}
else if(c==4)
{
    d=a/b;
    e="a/b";
}
else
{
    console.log("Invalid Input");
    document.write("Invalid Input");
}
document.write(e + " " ,d);
console.log(e + " " ,d);