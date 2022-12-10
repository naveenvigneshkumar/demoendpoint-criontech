const express = require('express');
const app = express();
const port = 9000;
const samplerRouter = require('./routes/'); 

app.use(express.json());
app.use('/',samplerRouter);

app.listen(port,()=>{
    console.log(`server start: ${port}`);
});
