const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('./public'))

app.get('/', (req, res) =>{
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));
});


app.listen(5000);