import React from 'react';
import axios from 'axios';

const AddUser = () => {
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
                        /> 
                    </div>
                    <div>
                        <label htmlFor="bio">Bio: </label>
                        <input
                            id="bio"
                            type="text"
                            name="bio"
                        /> 
                    </div>
                    <button type="submit">Add A User</button>
                </form>

            </div>
        </div>
    );
};

export default AddUser;