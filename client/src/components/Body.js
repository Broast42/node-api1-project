import React, { useState } from 'react';
import UsersList from './UsersList';
import Display from './Display';
import AddUser from './AddUser';

const Body = () =>{
    const [selectedUser, setSelectedUser] = useState({});
    const [users, setUsers] = useState([]);
    
    return(
        <div className="body">
            <div className="user-list-container">
                <UsersList 
                    setSelected={setSelectedUser} 
                    selected={selectedUser}
                    userState= {[users, setUsers]}
                />
            </div>
            <div className="col">
                <Display user={selectedUser} setSelected={setSelectedUser} />
                <AddUser setSelected={setSelectedUser} users={users}/>
            </div>
            
        </div>
    );
};

export default Body;