let a=document.querySelector(".a")

let mode="light"
a.addEventListener("click",()=>{
    if(mode==="light")
{
    console.log(mode);
    mode="dark"
       document.body.style.backgroundColor="black"
 document.body.style.color="white" 
}
else{
    document.body.style.backgroundColor="white"
    document.body.style.color="black" 
    mode="light"
      
}
})
// let count=0;
// let b=()=>
// {
//     count++;
//   if(count%2==0)

//     {
//         console.log(count);
// document.body.style.backgroundColor="black"
// document.body.style.color="white"

//     }
//     else
//     {
//         document.body.style.backgroundColor="white"
// document.body.style.color="black" 
//     }

// }
// // let c=()=>
// // {
// //     document.body.style.backgroundColor="white"
// // document.body.style.color="black"
// // }



// a.addEventListener("click",b)
// // a.addEventListener("dblclick",c)