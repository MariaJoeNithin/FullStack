
let value = [["hi","hello"],[10,20],[20,10]];
let i,j;

for(i=0;i<value.length;i++)//value total elements 3 row
{
    for(j=0;j<value[i].length;j++) //value i checks each element of value where value i has 2 element inside
    {
        console.log(value[i][j]);
        document.write("&nbsp",value[i][j]);
    }
    document.write("<br>");
}

value.push(["hi","hello"]);
console.log(value);
document.write("<br>",value);
document.write("<br>")

for(let x in value){
document.write("<br>",value[x]);
}

document.write("<br>")

for ( let i of value)
{
    for(let j of i)
    {
        document.write(j);
    }
}

//filter split join sort 