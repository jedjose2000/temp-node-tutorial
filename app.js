const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const authorize = require('./middleware/authorize');
const morgan = require('morgan');

// req => middleware => res

// app.use(logger);

// app.use('/api',logger); //applied to any /api route

// app.use([logger,authorize]); //execute multiple middleware functions. Executed in order
// app.use(express.static('./public'));
app.use(morgan('tiny'));

app.get('/' ,(req,res)=>{
    res.send('home');
});

app.get('/about', (req,res)=>{
    console.log(req.user);
    res.send('about');
});

app.get('/api/products', (req,res)=>{ //[logger,authorize] example for using multiple middlewares. Must be stored into an array
    console.log(req.user);
    res.send('products');
});

app.listen(5000, ()=>{
    console.log('SERVER STARTED');
});