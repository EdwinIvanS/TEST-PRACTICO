var express = require('express');
// router
var indexApiRouter = require('./routes/apiRouter');

const PORT = process.env.PORT || 3001;

var app = express();

app.use('/api', indexApiRouter);

// correr servidor 
app.listen(3001, ()=>{
    console.log('server on port 3001');
})


module.exports = app;
