
// let d=1;
// let e=1;

// let a=document.querySelector(".a")
// a.onclick = ()=>{
//   e++;
//   for(d=1;d<=10;d++)
//     console.log(`${e}x${d}=`,e*d)  
  
// }
// let b=document.querySelector(".b")
// b.ondblclick = ()=>{
//     console.log("sad")
  
// }
// b.onclick =() =>
// {
//   console.log("happpy")
// }
// let c=document.querySelector(".c")
// c.onmouseover = ()=>{
//     // alert("hovered")
// c.style.backgroundColor="red"       
// }
// console.log(c)


// let f=document.querySelector(".d")
// let count=0;

// f.onclick = ()=>
// {
//   count++;
//   console.log(count)
// }
// f.ondblclick=()=>
// {
//   count=0;
//   console.log(count)
// }

// let h=document.querySelector(".k")
// h.onclick=()=>
// {
//   console.log(document.querySelector("p").innerText="Error Occured").style.color="green"
  
// }

let a=document.querySelector(".a")
console.log(a);

a.addEventListener("click",()=>
{
  console.log("hi hoiw hsoaho")
})

let b=()=>{
  console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
}
a.addEventListener("mouseover",b)

a.removeEventListener("mouseover",b)