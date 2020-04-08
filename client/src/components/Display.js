import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Display = (props) =>{

    const [formView, setFormView]= useState(false);
    const [newInput, setNewInput] =useState({name: "", bio: ""});
    

    useEffect(() =>{
        setNewInput({
            name: props.user.name,
            bio: props.user.bio
        })
    },[props.user])

    const changeHandle = (e) => {
        setNewInput({
            ...newInput,
                [e.target.name]: e.target.value,
        })
        
    }

    const editUser = (e) => {
        e.preventDefault();
        axios
            .put(`http://localhost:5000/api/users/${props.user.id}`, newInput)
            .then(res =>{
                //console.log(res);
                props.setSelected(newInput);
            })
            .catch(err=>{
                console.log(err);
            })

    }

    const deleteUser = (e) => {
        e.preventDefault();
        axios
            .delete(`http://localhost:5000/api/users/${props.user.id}`)
            .then(res => {
                console.log(res);
                props.setSelected({});
            })
            .catch(err => {
                console.log(err.response);
            });
    }
    
    //console.log("dis", reset);
    return(
        <div className="display-container">
            <div className="display-window">
                <div className="display-window-header">
                    <h2>User Info</h2>
                </div>
                <div className="display-info">
                    {props.user.name ?
                        <div> 
                            <h3>{props.user.name}</h3>
                            <p>{props.user.bio}</p>
                            {!formView ?
                                <button className="edit-button" onClick={() => setFormView(true)}>Edit This User</button>

                            :
                                <div>
                                    <form className="edit-form" onSubmit={(e) => {editUser(e); setFormView(false)}}>
                                        <div className="form-box">
                                            <button className="x-button" onClick={(e) => {e.preventDefault(); setFormView(false); }}>x</button>
                                            <div className="form">
                                                <label htmlFor="name">User Name</label>
                                                <input 
                                                    id="name"
                                                    name="name"
                                                    type="text" 
                                                    defaultValue={props.user.name}
                                                    onChange={(e) => changeHandle(e)}
                                                />

                                                <label htmlFor="bio">User Bio</label>
                                                <input
                                                    id="bio"
                                                    name="bio"
                                                    type="text"
                                                    defaultValue={props.user.bio}
                                                    onChange={(e) => changeHandle(e)}
                                                />
                                                <button type="submit">Edit User</button>
                                                <button onClick={(e) => {deleteUser(e); setFormView(false); }}>Delete User</button>
                                            </div>
                                        </div>
                                    </form>
                                    
                                </div>
                            }
                        </div>
                    :
                        
                        <p>Select a user from the list to see their info.</p>
                            
                        
                    }
                </div>

            </div>
        </div>
    );
};

export default Display;