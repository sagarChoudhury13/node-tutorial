const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req);
    if(req.url === '/'){
        return res.end("Home Page");
    }
    if(req.url === '/about'){
        return res.end("This is the about page.")
    }
    res.end(`<h1>Oops</h1>
        <p>Go back to Home:</p>
        <a href="/">here</a>`);
})

server.listen(5000);