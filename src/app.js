const express = require('express')
const app = express()

//set port
app.set('port',process.env.POST||3001)

//middeleware
app.use(express.json())

app.use('/',(req,res)=>{
    res.send('hello world from nodejs')
})
app.listen(app.get('port'),()=>{
    console.log('starting node server');
    
}
)