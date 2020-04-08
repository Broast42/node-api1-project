const express = require("express");
const db = require("./database.js");

const server = express();

server.use(express.json());

server.post("/api/users", (req, res) =>{
    if(!req.body.name || !req.body.bio){
        return res.status(400).json({
            errorMessage: "Please provide name and bio for the user."
        })
    }else{
        const newUser = db.createUser({
            name: req.body.name,
            bio: req.body.bio
        })
        if(newUser){
            res.status(201).json(newUser);  
        }else{
            res.status(500).json({
                errorMessage: "There was an error while saving the user to the database."
            })
        }
       
    }
           
})

server.get("/api/users", (req, res) => {
    const users = db.getUsers();

    if(!users){
        res.status(500).json({
            errorMessage: "The users information could not be retrieved." 
        })
    }else{
        res.status(200).json(users);
    }

    
})

server.get("/api/users/:id", (req, res) => {
    const userId = req.params.id;
    const user = db.getUserById(userId);

    if(!user){
        res.status(404).json({
            message: "The user with the specified ID does not exist." 
        })
    }else{
        if(user){
            res.status(200).json(user);
        }else{
            res.status(500).json({
                errorMessage: "The user information could not be retrieved."
            })
        }
    }
})

server.delete("/api/users/:id", (req, res) =>{
    const userId = req.params.id;
    const user = db.getUserById(userId);

    if(!user){
        res.status(404).json({
            message: "The user with the specified ID does not exist." 
        })
    }else{
        const userDeleted = db.deleteUser(userId);
        if(userDeleted){    
            res.status(204).end();
        }else{
            res.status(500).json({
                errorMessage: "The user information could not be removed."
            })
        }
    }
    
})

server.put("/api/users/:id", (req, res) => {
    const user = db.getUserById(req.params.id);

    if(!user){
        res.status(404).json({
            message: "The user with the specified ID does not exist." 
        })
    }else if(!req.body.name || !req.body.bio){
        res.status(400).json({
            errorMessage: "Please provide name and bio for the user." 
        })
    }else{
        const updateUser = db.updateUser(user.id,{
            name: req.body.name,
            bio: req.body.bio
        })
        console.log(user);
        if(updateUser){
           res.status(200).json(updateUser); 
        }else{
            res.status(500).json({
                errorMessage: "The user information could not be modified." 
            })
        }
        
    }

})

server.listen(5000, () =>{
    console.log("Server is listening on port 5000");
} )