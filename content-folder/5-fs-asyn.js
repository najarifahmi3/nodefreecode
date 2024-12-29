 // we just desturctred these 2files so we can use just the 2 mehtods we imported from fs
// asyn means call the callback function when we are done
//So, a callback function is essentially a way to say,
//  "Here's something I need you to do later; 
// call me back when you're done.
// " It's a fundamental concept in asynchronous programming.

const {readFile,writeFile}=require('fs')
readFile('./content-folder/first.txt','utf-8',(err,result)=> {
    if(err){
        throw err
    }
    const first=result;
    readFile('./content-folder/second.txt',
        'utf-8',
        (err,result)=>{
        if(err){
            throw err
        }
        const second =result
        writeFile('./content-folder/result-async.txt',
                    `Here is the result: ${first},${second}`,{flag:'a'},(err)=>{
                        if(err){
                            console.log(err);
                            
                        }
                        console.log('written successfully')

                    })
    })

})