//repeat karne ko loop kahte hai
//for while do-while forin forof forEach 

const { startTransition } = require("react")


//kaha se jaana hai  -> kaha tak jaana hai -> kaise jaana hai
//for

// for(start; end; change;){
///     body
// }

// for(let i=1; i<=5; i++){
//     console.log("helllo")
// }

// for(let i=1; i<=10; i++){
//     console.log(`${i} * ${2} = ${i*2}`)
// }


for(let i=1; i<=50; i++){
    if(i===32){
        break;
    }
    console.log(i)
}


//kaha se jaana hai - > kab rukna hai -> kaise jaana hai
//while

// start
// while(end){
//     //code
//     change
// }

// let i=1;
// while(i<33){
//     console.log(i);
//     i++;
// }

//do_while

// let i=12;
// do{
//     console.log(i)
//     i++;
// }while(i<=20);