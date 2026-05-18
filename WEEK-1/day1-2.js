//DAY-1
// 2.Find the big number in given three numbers
function bigNumber(a,b,c)
{
    let a1=1;//variables
    let b1=3;
    let c1=4;
        if(a1>b1 && a1>c1)
        return a1
    
    else if(b1>c1 && b1>a1)
    return b1
    else
        return c1
}
let result=bigNumber(10,2,6)
console.log(result)
let d=5
let t=10
let c=15
if(d>t && d>c)
    console.log("bigger number is d",d)
else 
if(t>c && t>d)
    console.log("bigger number is t",t)
else
if(c>t && c>d)
    console.log("bigger number is c",c)

