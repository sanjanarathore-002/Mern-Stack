// //function
// function function_name(parameter){
//     body
// }


// function_name(arg)


function lolo(){
    console.log("happy newer year");
}

lolo();


let fnc=function hell0(){
    console.log("hello world")
}

console.log(fnc)
fnc();
//fat arrow function


let funct= ()=>{
    console.log("hhhhhhhhhhhh")
};
funct();

///jab arguments kai saare ho to humein uthe hi parameter banaane padege, issey bachne ke liye , hum rest ka use karte hai ... agar ... function ke parameter space meain lage to wo rest operator hai and ager wo arrays and objects mein lage to wo spread operator hai

function abcd(...val){
    console.log(val)

}

abcd(1,2,3,4,5,5,56,89,9888,0)


///return matlab jaha se aaya ho wahi daal denge

function adce(){
    return 12;

}
let val1=adce();
console.log(val1);

//first class fncs-> functions ko values ki tarah treat kar
function adcf(val){
    val();
}

adcf(function(){
    console.log("hey")
});

//high order function wo function hota hai jo ki return kare function ya fir acceept kare ek fnc apne parameter mein

function abcd1(val){
return function(){
 console.log("hello higher oreder function")
}
}


abcd1()()

//pure vs impure function
//aisa fnc jo ki baahar ki vlaue ko naa badle wo hai pure function
let a=12;
function ab(){
    console.log("hellow ")
}
//aisa fnc jo  ki baahar ki vlaue ko badal de wo hai impure function
function ac(){
    a++
}

//closures-> ek function jo return kare ek aur function aur return hone walla function humesha youse karega parent function ka koi variable

function adc(){
    let a=12;
    return function(){
        console.log(a)
    }
}
adc();

//




//
(function(){
    console.log("hellll")
})();

//hoisting

adddd();

function adddd(){
    console.log("hkkjkjkl")
}