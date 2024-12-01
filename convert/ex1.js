const express = require("express");
const bodyParser = require("body-parser");
const app = express(); 

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//{id:unique_number, firstname:string, lastname:string, emailid:string, password:string, createdOn:datestring}
let users = [];

app.post('/app/users/create', (req,res)=> {
    const {user} = req.body;
    
    if(users.some(item=>item.email==user.email))
        res.send(400);
    else
    {
        users.push(user);
        res.send("server received request object");
    }
})

app.get('/app/users', (req, res)=>{
    res.send(users);
})

app.post('/app/users/:type/create', (req,res)=> {
    //Q1. print only status of a user
        //res.send(req.body.data.status);

    //Q2. print complete user Object
        //res.send(req.body.data.user);

    //Q3. print only user role
        //res.send(req.body.role);

    //Q4. print type of user
        res.send(req.params.type);
});


//query parameter = /app/users/modify?id=11
app.put("/app/users/modify", (req,res)=>{
    console.log(req.query.id);

    //returns original data
    let _user = users.find(item=>item.id==req.query.id);

    if(_user)
    {
        users = users.map(item=>{
            if(item.id==req.query.id)
            {
                item = req.body.user;
            }
            return item;
        })

        //returns modified user
        _user = users.find(item=>item.id==req.query.id);
        // delete _user.password;
        delete _user["password"];
        res.send(_user);
    }
    else
    {
        res.send(404);
    }
});


app.delete('/app/users/delete', (req,res)=>{
    var position = users.indexOf(users.find(item=>item.id==req.query.id));
    
    if(position>=0)
    {
        users.splice(position,1);   
        res.send(200);
    }
    else
    {
        res.send(404);
    }
})


app.listen(4949);  




// API calls
// Modify User 
// Put : localhost:4949/app/users/modify?id=11
// {
//   "user":{
//     "id":11, 
//     "firstname":"Raj", 
//     "lastname":"Devid", 
//     "emailid":"rajdevid@website.com", 
//     "password":"secret", 
//     "createdOn":"10-Nov-2024"
//   }
// }

// Remove User
// Delete : localhost:4949/app/users/delete?id=11