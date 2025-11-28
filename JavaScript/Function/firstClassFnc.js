//first class function:- functions ko values ki tarah treat kar


function abdc(val){
 val();
}

abdc(function (){
    console.log("hello world")
})


///high oreder function:- wo function hota hai jo ki return kare function ya fir acceept kare ek fnc apne parameter mein

function highorF(){
    return function(){
        console.log("hi");
    }
}

highorF() ();