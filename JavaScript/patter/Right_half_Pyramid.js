
// for(let i=1; i<=5; i++){
//     for(let j=1; j<=i; j++){
//         console.log("*")
//     }
//     console.log(" ")
// }

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

console.log("Number pattern right half pyramid");
for(let x =1; x<=5; x++){
    let row1="";
    for(let y=1; y<=x; y++){
        row1+=y;
    }
    console.log(row1)
}


for(let a=1; a<=5; a++){
    let row2="";
    for(let b=1; b<=a; b++){
        row2+=a;
    }
    console.log(row2)
}


console.log("print Alphabet in Right helf pyramid js")

