const express = require('express');
const app = express();
const data = require('./data');

app.get('/', (req,res)=>{
    res.send('<h1>HELLO WORLD</h1><a href="/api/products">products</a>')
});

app.get('/api/products', (req,res)=>{
    let newProduct = data.products.map((product) =>{
        return [product.name,product.image,product.id]
    });

    res.send(newProduct);
});


app.get('/api/v1/query', (req,res) =>{
    let {search,limit} = req.query;
    let sortedProducts = [...data.products]; 
    if(search){
        sortedProducts = sortedProducts.filter((product) =>{
            return product.name.startsWith(search);
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit));
    }

    if(sortedProducts.length < 1){
        // res.status(200).send('no products matched your search');
        return res.status(200).send({success:true, data: []});
    }
    res.status(200).json(sortedProducts);
});



app.get('/api/products/:productID', (req,res)=>{
    let productID = req.params.productID;
    let singleProduct = data.products.find((product)=> product.id === Number(productID))
    if(!singleProduct){
        res.status(404).send('data not found');
    }
    res.json(singleProduct);
});

app.get('/api/products/:productID/reviews/:reviewID', (req,res)=>{
    console.log(req.params);
    console.log(req.query);
    res.send('hello world');
});

app.listen(5000, ()=>{
    console.log('SERVER IS LISTENING ON PORT 5000');
})