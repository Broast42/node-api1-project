import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
    const [userToAdd, setUserToAdd] = useState({name: "", bio: ""})

    const userHandle = (e) => {
        setUserToAdd({
            ...userToAdd,
                [e.target.name]: e.target.value,
        })
    };

    const addUser = (e) => {
        e.preventDefault();

    };

    console.log("add user",userToAdd);
    return(
        <div className="add-form-container">
            <div className="add-form">
                <div className="add-form-header">
                    <h3>Add a User</h3>
                </div>
                <form className="add-form-form">
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