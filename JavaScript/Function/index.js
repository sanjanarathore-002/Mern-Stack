// function addNumber(num1,num2,num3=4){
//     const sum=num1+num2+num3;
//     console.log(sum);
// }
// addNumber(2,43)


// //rest operator
// function Addnum(...num){//create array in rest operator
//     // console.log(num)
//     let sum=0;
//     for(let n of num ){
//         sum+=n;
//     }
//     console.log(sum);
// }

// Addnum(1,2);
// Addnum(1,2,3);
// Addnum(1,2,3,4);
// Addnum(1,2,3,4,5,6,7)


// const arr=[10,30,40 ,50];
// const arr2=[30,70,90,10]

// // const [first ,second, ...num]=arr;
// // console.log(first,second,num);

// const ans=[arr,arr2];
// console.log(ans)


// const add = function(num1,num2){
//  return num1+num2;
// }

// console.log(add(3,4));

//Arrow function
//()=>{

  //   }
// const addNumber = (num1,num2)=> num1+num2;

//   const addNumber =(num1,num2)=>{
//     return num1+ num2;

//   }

//   console.log(addNumber(4,5))

// let arr=[199,588,568,234,88];
// arr.sort((a,b)=>a-b);
// console.log(arr)


//if we have single parameter , no need of this ()
// const squarNumber = num => num*num;
// console.log(squarNumber(3))


// const greeting= ()=>{
//     let user={
//         name:"sanjana",
//         age:23
//     }
//     return user;
// }

// const greeting= ()=>{
//      return {
//         name:"sanjana",
//         age:23
//     }
    
// }

// const greeting= ()=> ({ name:"sanjana",age:23});
   
//     console.log(greeting());

//IIFE
// (function greeting(){
//  console.log("hello")
// })();


// (()=>{
//     console.log("hey");
// })();

function greeting(){
    console.log("Hello ji ,kaise ho")
}

// function meet(callback){
//     console.log("I am going to meet someone")
//     callback();
//     console.log("I have finished meeting")
// }
// function dance(){
//     console.log("I am dancing");
// }

// function meet(callback){
//     console.log("I am going to meet someone")
//        callback();
//     console.log("I have finished meeting")
// }

// // meet(greeting());
// // meet(greeting)

// meet(greeting);
// meet(dance)



//binkit
function binkitOrderPlaced(){
    console.log("We have started packing your order")
}
function zomatoOrderPlaced(){
    console.log("we have started preparing your food")
}

function payment(amount,callback){
    console.log(`${amount} payment has initilized`);
    console.log("Payment is received")
    callback()
}

//GST: Government
//rider ko kitna payment dena
//company ko kitna

// payment(500,zomatoOrderPlaced);
payment(5000,binkitOrderPlaced)