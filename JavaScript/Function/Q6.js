let multiply=(a,b)=>{
    return a*b;
};

multiply(2,3);


function sayhi(name="sanjana"){
    console.log("hey"+name)
}
sayhi();


function getScore(...score){
     let total=0;
 score.forEach(function(val){
   
    total=total+val;
 });
 return total;
}

console.log(getScore(1,23,4,45,55,6,45,6,6))

function checkAge(age){
    if(age<18) return "Too young";
    return "Allowed"
}

console.log(checkAge(23))


function f(){
    return
}

console.log(f())

function adkk(val){
    val();
}

adkk(function(){
    console.log("My a grand")
})




