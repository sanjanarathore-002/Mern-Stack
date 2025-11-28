//pure vs impure function
//aisa function jo ki baahar ki value ko naa badle wo hai pure functions

let a=12;
function abs(){
    console.log("hello")
}
// aise function jo ki baahar ki value ko badle de wo hai impure functions

function impure(){
    a++;
    console.log(a)
}

abs();
impure();