function getAdmins(map){
    let admins = [];
    for ([Key, value] of map) {
        if (value === "Admin") {
            admins.push(Key);
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Naiara', 'Admin');
usuarios.set('Pablo', 'User');
usuarios.set('Loli', 'Admin');
usuarios.set('Chester', 'Admin');

console.log(getAdmins(usuarios));