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

server.listen(5000, () =>{
    console.log("Server is listening on port 5000");
} )