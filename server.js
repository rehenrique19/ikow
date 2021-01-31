const express = require('express');
const path = require('path');
const app = express();

const api  = require('./server/routes/api');

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.listen(4600,( req,res) =>{
    console.log('running');
})
