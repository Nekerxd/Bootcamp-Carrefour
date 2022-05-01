function getAdmins(map) {
    let admins=[];
    for([key, value] of map){
        if (value == 'Admin'){
            admins.push(key)
        }
    }
    return admins;

}

const usuarios = new Map();

usuarios.set('Natália', 'Admin');
usuarios.set('Ricardo', 'Admin');
usuarios.set('Ana', 'User');
usuarios.set('Maurício', 'Admin');

console.log(getAdmins(usuarios));