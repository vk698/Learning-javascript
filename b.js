// let a=[12,23,"VK",true,0];
// console.log(a.length)


// let a=["vishal","sumit","ronit","uddesh","ujjwal"];
// let b=a.length;
// console.log(`there are ${b} students in this array`)

// let a=["red","blue","yellow","voilet"];
// console.log(a.toString())

// let a=["apple","mango","kiwi","pineapple"];
// console.log(a.toString())


// let a=["vishal","sumit","ronit","uddesh","ujjwal"];
// console.log(a.at(3))


// let a=["delhi","mumbai","kolkata","banglore","chennai"];
// console.log(a.at(-1))


// let a=["apple","mango","kiwi","pineapple"];
// console.log(a.join("-"))


// let a=[23,43,6,85,75,4,34,343,35,4];
// console.log(a.join("|"))


// let a=["apple","mango","kiwi","litchi"];
// a.pop();
// console.log(a)


// let a=[10,20,30,40];
// a.pop();
// console.log(a)



// let a=[1,2,3];
// a.push(4);
// console.log(a)


// let a=["apple","litchi","pineapple"];
// a.push("mango");
// console.log(a)


// let a=[10,20,30];
// a.shift();
// console.log(a)

// let a=["apple","mango","kiwi"]
// a.shift();
// console.log(a)


// let a=[20,30,40];
// a.unshift(10);
// console.log(a)


// let a=["mango","kiwi"]
// a.unshift("apple");
// console.log(a)



// let a=[ 1,2,3,4,4,6];
// console.log(Array.isArray(a))


// let a=10;
// console.log(Array.isArray(a))



// let a=["kiwi","litchi","apple"];
// delete a[1];
// console.log(a)



// let a=[10,20,30,40];
// delete a[2];
// console.log(a)



// let a=[1,2];
// let b =[3,4];
// console.log(a.concat(b))



// let a=["kiwi","mango"];
// let b =["apple","litchi"];
// console.log(a.concat(b).join("|"))



// let a=[10,20,30,40,50];
// console.log(a.slice(1,3))



// let a=["mango","kiwi","apple","banana"];
// console.log(a.slice(0,2))



// let a=[1,2,3,4];
// a.splice(2,1);
// console.log(a)


// let a=["apple","banana","mango"];
// a.splice(1,0,"orange");
// console.log(a)




// let a=[85, 97, 44, 37, 76, 60];
//  let b=0;
// for (i=0;i <= a.length-1;i++)
// {
//     b=b+a[i];
// }
// let avg=b/a.length;
// console.log(avg)



let a=[250, 645, 300, 900, 50];
for(i=0;i<=a.length-1;i++)
{
    a[i]=a[i]/10;
}
console.log(a)