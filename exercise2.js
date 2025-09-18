import os from "os";
import fs from 'fs/promises';
import fss from 'fs';
import { error } from "console";


 async function readFileWithPromises(){
    try{
        const data = await fs.readFile("exercise1.js", 'utf-8');
        console.log("data from the file:",data.split('').filter((u)=> u != 'star').join(''));
        await fs.writeFile("output.txt",data);
        console.log("data written")

    }catch(err){
        console.error(err);
    }
}

function readFiles(){
    fss.readFile("exercise1.js", "utf-8", (error,data) => {
        if(error){
            console.error(error);
            return ;
        }
        console.log("data:", data)
        fss.writeFile("output.txt", data, () => {
            console.log("data written")
        })
    })
}

readFiles();


// console.log("platform:",os.platform());
// console.log("CPU architecture:",os.arch());
