let currentUsers: string[] = ["João", "Lucas", "Julia", "sasa", "igor"]

let newUsers: string[] = ["joão", "lucas", "sara", "teseu", "karla"]

newUsers.forEach((user) => {
    if (currentUsers.some((currentUser) => currentUser.toLowerCase() === user.toLowerCase())) {
        console.log(`O usuário ${user} já existe!`);
    } else { 
        currentUsers.push(user);
        console.log(`O usuário ${user} foi adicionado!`);
    }
})