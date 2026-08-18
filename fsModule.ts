import fs from "fs"

async function main(){
    try{
        fs.writeFile("test.ts", "Hello from node js")
    }
    catch(error){
        console.log(error)
    }

    setTimeout(()=>{
        fs.readFile("test.ts", "utf-8", (err, data)=>{
            if(err){
                console.log(err);
            }
            console.log(data);
        })
    }, 2000);
}

main()