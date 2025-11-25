const http=require('http');

// function requestListener(req,res){
//     console.log(req);
// }

// http.createServer(requestListener)

// http.createServer(function(req,res){
//     console.log(req);
// });


const Server=http.createServer((req,res)=>{
    // console.log(req);
    console.log(req.url,req.method,req.headers);
    res.setHeader('Content-Type','text/html');
    res.write('<head><title>Complete coding</title></head>');
    res.write('<body><h1>like/share/subscribe</h1></body>');
    res.write('</html>');
    res.end();
    // process.exit();//stop event loop
});

const PORT =3000;
// Server.listen(3000);

Server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});