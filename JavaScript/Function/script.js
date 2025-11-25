// // function danca(){
// //     console.log("Danca with my boyfriend");
// // }

// // danca();

// // let fnc= function (){ 
// //     console.log("i love my self.")
// // }


// // let abed =()=>{

// // }

// function hello(v1){
//     console.log(`${v1} naach raha hai`)
// }

// hello("ghoda");

// hello("Rishi");
// hello("anjali");

// function add(x,y){
//     console.log(x+y);
// }

// add(2,3)


// //Default 


// function add(a=1,b=2){
//     console.log(a+b);
// }
// add();
// add(4,7)

//rest 

// function abcd(...val){
//     console.log(val)
// }

// abcd(1,2,3,4,5,5,6,7)

function abcd(a,b,c,...val){
    console.log(a,b,c,val);
}
abcd(1,2,3,4,5)