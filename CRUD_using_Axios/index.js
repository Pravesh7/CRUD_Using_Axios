const express= require('express');
const app= express();
const routes=require('./routes/axios_routes')

app.get('/',(req,res)=> res.send("hello there"));

// Middleware and body parser
app.use(express.json());
app.use('/axios',routes);

app.listen(7000,()=>console.log("Server is listening"));