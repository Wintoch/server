const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    res.set('Access-Control-Allow-Origin', '*');
    res.sendFile('/Users/jakubwintoch/Documents/server/pl_desc.json')
})

app.listen(8080)