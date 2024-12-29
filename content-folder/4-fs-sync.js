const {readFileSync,writeFileSync}= require('fs') // we just desturctred these 2files so we can use just the 2 mehtods we imported from fs
// readFileSync it is a method since it is a method we need to provide 2 parameters
// a path to that specific file and what is encoded 
console.log('start')
// fs.readFileSync(path,options)// options is how you want it to show in console utf8 brings it back as a textfile instead of maybe a binary file 
const first =readFileSync('./content-folder/first.txt','utf-8')
const second =readFileSync('./content-folder/second.txt','utf-8')
//console.log(first,second);


// now lets use the writFilesync fs.writeFileSync(path, data, options);
writeFileSync('./content-folder/result-sync.txt',
    `Here is the result: ${first},${second}`,{flag:'a'}
)
// we could also add a third parameter like append insteadd of just ovewriting the content 
//fs.writeFileSync(filePath, data, { encoding: 'utf8', flag: 'a' })
console.log('done with this task');
console.log('starting the next one');
