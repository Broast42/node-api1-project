import React, { useState } from 'react';
import axios from 'axios';


const AddUser = (props) => {
    const [userToAdd, setUserToAdd] = useState({name: "", bio: ""})
    let newId = "";
    if(props.users){
       newId = props.users.length + 1;
       console.log("newId",newId); 
    }
    
    const userHandle = (e) => {
        setUserToAdd({
            ...userToAdd,
                [e.target.name]: e.target.value,
        })
    };

    const addUser = (e) => {
        e.preventDefault();
        axios
            .post(`http://localhost:5000/api/users`, userToAdd)
            .then(res => {
                props.setSelected({
                    id: newId,
                    name: userToAdd.name,
                    bio: userToAdd.bio
                })
            })
            .catch(err =>{
                console.log(err.response.data)
            })
    };

    console.log("add user",props.users);
    return(
        <div className="add-form-container">
            <div className="add-form">
                <div className="add-form-header">
                    <h3>Add a User</h3>
                </div>
                <form className="add-form-form" onSubmit={(e) => {addUser(e)}}>
                    <div>
                       <label htmlFor="name">Name: </label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            onChange={(e) => userHandle(e)}
                        /> 
                    </div>
                    <div>
                        <label htmlFor="bio">Bio: </label>
                        <input
                            id="bio"
                            type="text"
                            name="bio"
                            onChange={(e) => userHandle(e)}
                        /> 
                    </div>
                    <button type="submit">Add A User</button>
                </form>

            </div>
        </div>
    );
};

export default AddUser;