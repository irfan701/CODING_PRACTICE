const http =require("http")
//const server=http.createServer();  //SERVER IS A EVENT EMITTER


const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        res.write("Hello Programers")
        res.end()
    }else if(req.url==='/about'){
        res.write("This Is About Page")
        res.end()
    }else{
        res.write("Not Found")
        res.end()
    }

});
server.on('connection',(socket)=>{
    console.log("New Connection....")
})

server.listen(3000,()=>{
    console.log("listening on port 3000")
})