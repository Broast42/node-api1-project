let users = [{
    id: "1", 
    name: "Jane Doe", 
    bio: "Not Tarzan's Wife, another Jane",  
}]

function createUser(data) {
    const payload = {
        id: String(users.length + 1),
        ...data,
    }

    users.push(payload);
    return payload;
}

function getUsers() {
    return users
};

function getUserById(id){
    return users.find(u => u.id === id);
}

function deleteUser(id){
    users = users.filter(u => u.id != id);
}

function updateUser(id, data) {
    const index = users.findIndex(u => u.id === id);
    users[index] = {
        ...users[index],
        ...data
    }
    return users
}

module.exports ={
    getUsers,
    createUser,
    getUserById,
    deleteUser,
    updateUser
}