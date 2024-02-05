let {people} = require('../data');

const getPeople = (req,res) =>{
    res.status(200).json({success:true,data:people})
}

const createPerson = (req,res) =>{
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'});
    }
    res.status(201).json({success:true,person:name});
}

const createPersonPostman = (req,res)=>{
    let {name} = req.body;
    if(!name){
        return res.status(401).send('Please provide credentials')
    }
    res.status(200).json({success:true, data:[...people,name]});
}

const editPerson = (req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    let person = people.find((person) => person.id === Number(id));  
    console.log(person); 
    if(!person){
        return res.status(404).json({success:false,msg:`no person with ${id} exists`});
    }
    const newPeople = people.map((person) =>{
        if(person.id === Number(id)){
            person.name = name;
        }
        return person;
    });
    res.status(200).json({success:true, data:newPeople});
}

const deletePerson = (req,res)=>{
    let person = people.find((person)=> person.id===Number(req.params.id));
    if(!person){
        return res.status(404).json({success:false,msg:`no person with ${req.params.id} exists`});
    }
    const newPeople = people.filter((person)=>person.id !== Number(req.params.id))
    return res.status(200).json({success:true, data:newPeople});
}

module.exports = {
    getPeople, 
    createPerson, 
    createPersonPostman, 
    editPerson, 
    deletePerson
}