let users = {
    id: "1", 
    name: "Jane Doe", 
    bio: "Not Tarzan's Wife, another Jane",  
}

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

module.exports ={
    getUsers,
}