///closures:- ek function jo return kare ek aur function aur return hone waala function humesha youse karega parent function ka koi variable.

function closures(){
    let a=12;
    return function(){
        console.log(a);
    }
}
closures()();

//lexical scoping

function abcd(){
    let a=12;
    function defg(){
        let b=13;
        function ghij(){
            let c=15;
        }
    }
}