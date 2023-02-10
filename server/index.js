var express = require('express');
// router
var indexApiRouter = require('./routes/apiRouter');

const PORT = process.env.PORT || 3001;

var app = express();
app.use( ( req, res, next ) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin','Content-Type, Authorization');    
    next();
});

app.use('/api', indexApiRouter);

// correr servidor 
app.listen(3001, () => {
  console.log("server on port 3001");
});

module.exports = app;
