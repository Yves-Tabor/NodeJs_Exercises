// You are tasked with creating a basic Node.js server using the http module.
// The server should be capable of handling two types of requests: GET Reques
// t: When a user sends a GET request to the server, the server should read th
// e contents of a file named input.txt located in the same directory as your
// server script and send its contents as the response. POST Request: When a u
// ser sends a POST request to the server with data in the body, the server sh
// ould write that data into a file named output.txt in the same directory. Yo
// u can choose to implement the file operations (reading and writing) either
// using the standard Node.js fs (File System) module or by using streams for
// handling large files more efficiently. Requirements: Create a server using
// the http module. Handle GET and POST requests as described. Use the fs modu
// le to read from and write to files. Implement the functionality using strea
// ms if you want to handle large files more efficiently. Bonus: Ensure that t
// he server returns appropriate status codes and error messages in case of an
// y file operation failures

import http from 'http';
import fs from 'fs';

const port = 5000;
const server = http.createServer((req, res)=>{
    if(req.method === "GET"){
        fs.readFile("input.txt", "utf-8", (err, data)=>{
            if(err){
                res.writeHead(500, {"Content-Type": "text/plain"});
                res.end("Error reading file");
                return;
            }
            res.writeHead(200, {"Content-Type": "text/plain"});
            res.end(data);
        })
    }
    else if(req.method === "POST"){
        let body = ""

        req.on("data", chunk => body += chunk)
        req.on("end", ()=>{
            fs.writeFile("output", body, (err)=>{
                if(err){
                    res.writeHead(500, {"Content-Type": "text/plain"})
                    res.end("Error writting file");
                    return;
                }
                res.writeHead(201, {"Content-Type": "text-plain"})
                res.end("File written successfully" + body);
            })
        })
    }
    else{
        res.writeHead(405, {"Content-Type": "text/plain"})
        res.end("Method not allowed !!!");
    }
})