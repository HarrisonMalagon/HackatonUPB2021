const express = require ('express')
const app = express()
const cors = require('cors')

app.use(require('./routes/routes'))


app.listen (9000,()=>{
    console.log('Server Running on', 'http://localhost:'+9000)
})

app.use(cors())