import fs from "fs"

function main(){
    fs.writeFile("test.ts", "Hello from NodeJs", (err)=>{
        if(err){
            console.log("An error occured:", err);
            return;
        }
        console.log("File successfully created");

        fs.readFile("test.ts", "utf-8", (err, data)=>{
            if(err){
                console.log(err);
                return;
            }

            console.log(data);
        });
    })
}
main();