let systemUsers: string[] = [""]

systemUsers.forEach(users => {
    
    if (users == "") {
        console.log("não temos usuários cadastrados")
    }
    else if (users == "admin") {
        console.log("Olá Senhor, como deseja configurar o sistema ?")
    }
    else {
        console.log(`Olá ${users}, seja bem vindo`)
    }
    
});