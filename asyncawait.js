
//  fetch("https://dummyjson.com/products").then((res)=>res.json()).then((data)=>console.log(data)).catch((err)=>console.log("error",err))


// async function products() 
// {
//     let res= await fetch("https://dummyjson.com/products");
//     let data= await res.json()
//     console.log(data);
// }
// products();


async function products() 
{
    try
    {
    let res= await fetch("https://dummyjson.com/products/add",
    {
    method:"POST",
      body:JSON.stringify(
        {
    title: " ehfioqwfowidjufowljfowjfopqwjhfo",
    userId:4,
})
    })
    


    let data= await res.json()
    console.log(data);
    }
    catch{
        console.log("error occured");
    }
}
products();