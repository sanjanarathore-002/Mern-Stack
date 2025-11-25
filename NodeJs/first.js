const fs=require('fs');
fs.writeFile("output.txt","writint file",(err)=>{
    if(err) console.log("Error occurred");
    else console.log("file written successfully")
})

console.log("sanjana is best")