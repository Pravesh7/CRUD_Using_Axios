const axios=require('axios');

module.exports.axios_get= async(req,res) =>{
    try{
    const result = await axios.get('https://jsonplaceholder.typicode.com/todos')
    res.status(200).send(result.data);
    }
    catch(err){
    res.status(500).json({"err":err});
    }
}

module.exports.axios_post= async(req, res) =>{
    try{
    const result=await axios.post('https://jsonplaceholder.typicode.com/todos',{
       title: req.body.title,
       completed: req.body.completed
    });
    res.send(200).send(result.data);
    }
    catch(err){
       res.status(500).json({"err":err});
    }
}

module.exports.axios_put=async(req, res)=>{
    try{
    const result=await axios.put('https://jsonplaceholder.typicode.com/todos/1',{
        title: req.body.title,
        completed: req.body.completed
    });
    res.status(200).send(result.data);
    }
    catch(err){
        res.status(500).send(err);
    }
}

module.exports.axios_delete= async(req, res)=> {
    try{
     const result= await axios.delete('https://jsonplaceholder.typicode.com/todos/1')
     res.status(200).send(result.data);
    }
    catch(err){
        res.status(500).send(err);
    }
}

// Performing multiple requests

module.exports.multiple_get=async(req,res)=>{
    try{
     const result= await axios.all([
         axios.get('https://jsonplaceholder.typicode.com/todos'),
         axios.get('https://jsonplaceholder.typicode.com/posts')
     ]);
     res.status(200).send({"res1":result[0].data, "res2":result[1].data})
    }
    catch(err){
        res.status(500).send(err);
    }
}