const express = require('express');
const route = require('./routes/indexRouter.js')
const app = express();

app.use(express.json());

app.use("/api",route);
app.listen(3000,()=>{
    console.log('port3000');
})