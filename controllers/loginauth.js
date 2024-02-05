const loginAuth = (req,res)=>{
    let {name} = req.body;
    if(!name){
        return res.status(401).send('Please provide credentials')
    }
    res.status(200).send(`Hello ${name}`);
}

module.exports = loginAuth;