// const ecommerceData = {
//   products: [
//     {
//       id: 1,
//       name: "Wireless Mouse",
//       category: "Electronics",
//       price: 599.99,
//       stock: 120
//     },
//     {
//       id: 2,
//       name: "Running Shoes",
//       category: "Footwear",
//       price: 2499.00,
//       stock: 60
//     },
//     {
//       id: 3,
//       name: "Backpack",
//       category: "Accessories",
//       price: 899.50,
//       stock: 80
//     }
//   ],
//   customers: [
//     {
//       id: 101,
//       name: "Amit Sharma",
//       email: "amit.sharma@example.com",
//       phone: "+91-9876543210"
//     },
//     {
//       id: 102,
//       name: "Priya Verma",
//       email: "priya.verma@example.com",
//       phone: "+91-9123456780"
//     }
//   ],
//   orders: [
//     {
//       order_id: 5001,
//       customer_id: 101,
//       items: [
//         {
//           product_id: 1,
//           quantity: 2,
//           price: 599.99
//         },
//         {
//           product_id: 3,
//           quantity: 1,
//           price: 899.50
//         }
//       ],
//       total_amount: 2099.48,
//       status: "Delivered",
//       order_date: "2026-03-20"
//     },
//     {
//       order_id: 5002,
//       customer_id: 102,
//       items: [
//         {
//           product_id: 2,
//           quantity: 1,
//           price: 2499.00
//         }
//       ],
//       total_amount: 2499.00,
//       status: "Shipped",
//       order_date: "2026-03-22"
//     }
//   ]
// };

// let b=ecommerceData.products.filter(c=>c.price>600);
// console.log(b.map(d=>d.name))















// @85585897226412 

// MAP :-
// 1. const nums = [1, 2, 3, 4];
// Use map to create a new array with each number doubled.

// 2. const words = ["apple", "banana", "mango"];
// Use map to convert all words to uppercase.

// 3. const names = ["John", "Sara", "Mike"];
// Use map to add "Mr./Ms." before each name.

// 4.const fruits = ["apple", "kiwi", "banana"];
// Return an array of word lengths.

// FILTER :-
// 1. const nums = [1, 2, 3, 4, 5, 6];
// Use filter to get only even numbers.

// 2. const words = ["hi", "hello", "sun", "javascript"];
// Get words with length greater than 3.

// 3. const ages = [12, 18, 25, 10, 30];
// Filter ages that are 18 or older.

// 4. const nums = [-3, 5, -1, 10, 0];
// Keep only positive numbers.

// REDUCE :-
// 1. const nums = [1, 2, 3, 4];
// Use reduce to find the sum.

// 2. const nums = [1, 2, 3, 4];
// Find the product of all numbers.

// ------------------------------------------------

// 1. const nums = [1, 2, 3, 4, 5];
// Double all numbers, then keep only numbers greater than 5.

// 2. const users = [
// //   { name: "John", age: 17 },
// //   { name: "Jane", age: 22 },
// //   { name: "Mark", age: 19 }
// // ];// 
// Get names of users who are 18+.

// 3. const cart = [
//   { item: "Book", price: 100 },
//   { item: "Pen", price: 20 },
//   { item: "Bag", price: 500 }
// ];
// Use reduce to calculate total price.








// const nums = [1, 2, 3, 4];
// let b=nums.map(a=>a*2);
// console.log(b)

// const words = ["apple", "banana", "mango"];
// let b=words.map(a=>a.toUpperCase())
// console.log(b)

// const names = ["John", "Sara", "Mike"];
// let b=names.map(a=> "Mr./Mrs "+a);
// console.log(b)

// const fruits = ["apple", "kiwi", "banana"];
// let b=fruits.map(a=>a.length);
// console.log(b)


// const nums = [1, 2, 3, 4, 5, 6];
// let b=nums.filter(a=>a%2==0);
// console.log(b)


// const words = ["hi", "hello", "sun", "javascript"];
// let b=words.filter(a=>a.length>3);
// console.log(b)

// const ages = [12, 18, 25, 10, 30];
// let b=ages.filter(a=>a>=18);
// console.log(b)

// const nums = [-3, 5, -1, 10, 0];
// let b= nums.filter(a=>a>0)
// console.log(b)

// const nums = [1, 2, 3, 4];
// let b=nums.reduce((a,b)=>a+b);
// console.log(b)

// const nums = [1, 2, 3, 4];
// let b=nums.reduce((a,b)=>a*b);
// console.log(b)

// const nums = [1, 2, 3, 4, 5];
// let b=nums.map(a=>a*2).filter(d=>d>5)
// console.log(b)



//  const users = [
//   { name: "John", age: 17 },
//   { name: "Jane", age: 22 },
//   { name: "Mark", age: 19 }
// ];
// let b=users.filter(a=>a.age>18).map(c=>c.name)
// console.log(b);



//  const cart = [
//   { item: "Book", price: 100 },
//   { item: "Pen", price: 20 },
//   { item: "Bag", price: 500 }
// ];

// let a=cart.map(b=>b.price).reduce((c,d)=>c+d)
// console.log(a)