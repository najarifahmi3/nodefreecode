const {readFile} =require('fs')
const path = require('path')


const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf',(err,data)=>{
            if(err){
                reject (err)
            }else{
                resolve(data)
            }

        })
    })
}


readFile ("./content-folder/first.txt",'utf-8',(err,data)=>{
    if(err){
        return
    }else { console.log(data)}

}

)   
