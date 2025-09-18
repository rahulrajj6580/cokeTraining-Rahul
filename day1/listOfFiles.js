import fs from "fs";

 async function getFiles(){
    try{
        const files = await fs.promises.readdir("./");
        console.log(files);
    }catch(err){
        console.error(err);
    }
 }

 getFiles();

// fs.readdir("./",(err,files) =>{
//     if(err){
//         console.error(err);
//         return ;
//     }
//     console.log(files);
// })