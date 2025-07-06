let systemUsers: string[] = ["admin", "sara", "francisco", "maria"]

systemUsers.forEach(users => {
    if (users == "admin") {
        console.log("Olá Senhor, como deseja configurar o sistema ?")
    }
    else {
        console.log(`Olá ${users}, seja bem vindo`)
    }
    
});