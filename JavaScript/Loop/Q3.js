let num=20;
let count=0;
let count1=0;
for(let i=1; i<=num; i++){
    if(i%2==0){
        console.log(i,"even number"); 
        count++;
    }
    else{
        console.log(i,"odd number ");
        count1++;
        
    }
}

console.log(`total even number ${count}`);
console.log(`total odd number ${count1}`);