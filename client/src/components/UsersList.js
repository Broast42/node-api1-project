import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UsersList = (props) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/users`)
            .then(res => {
                //console.log(res);
                setUsers(res.data);
            })
            .catch(err =>{
                console.log(err);
            });
    },[props.selected]);

    console.log(users)
    return(
        <div className="users-list">
            <div className="user-list-header">
                <h2>Users List</h2>
            </div>
            
            {users.map((x,i) =>(
                <div key={i} className="user-list-item" onClick={() => props.setSelected(x)}>
                    <p>{x.name}</p>
                </div>
            ))}

        </div>
    );
};

export default UsersList;