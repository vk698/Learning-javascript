let sum=(a,b) => a+b;
console.log(sum(20,34))



let mul=(p,q) => 
{
    console.log( p*q)
    return
}
mul(22,2);



let s=(...args)=>
    
{
    let sum=0;
    for(let a of args) sum += a;
    console.log(sum)
    return

}
s(23,34,3,2,2,2,2,2);
