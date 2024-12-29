const http =require('http')
const server =http.createServer((req,res)=>{
   
    
    
if(req.url==='/'){
    res.end('welcome to our home page')
    
}
   else if(req.url==='/about'){
    res.end('here is our shor history')
   }else{
    res.end(`
        <h1> oops!</h1>
        <p> we cant find the pager you are looking for </p>
        <a href="/">back home</a>
        `)
   }
   
})
server.listen(5000)




//what do web server do they keep on listenning for req