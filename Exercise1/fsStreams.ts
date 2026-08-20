import http from "http";
import fs from "fs";

const port = 3000
const server = http.createServer((req, res)=>{
    if(req.method === "GET"){
        const readStream = fs.createReadStream("input.txt", "utf-8");
        readStream.on("error", (err)=>{
            if(err){
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Error Reading file");
            }
        })

        readStream.on("open", ()=>{
            res.writeHead(200, {"Content-Type": "text/plain"});
            readStream.pipe(res);
        })
    }
    else if(req.method === "POST"){
        const writeStream = fs.createWriteStream("output.txt");
        writeStream.on("error", (err)=>{
            if(err){
                res.writeHead(500, {"Content-Type": "text/plain"})
                res.end("Error Writing file")
            }
        })

        writeStream.on("finish", ()=>{
            res.writeHead(201, {"Content-Type": "text/plain"});
            req.pipe(writeStream);
        })
    }
    else{
        res.writeHead(405, {"Content-Type": "text/plain"})
        res.end("Method not allowed.")
    }
})

server.listen(port, ()=>{
    console.log("Server running on port ", port);
})