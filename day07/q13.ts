import * as readline from "readline";

function perguntar(pergunta :string): Promise<string> {
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

return new Promise((resolve,) => {
    rl.question(pergunta, (resposta: string) => {
        rl.close();
        resolve(resposta)
    })
})

}

//main

main()

async function main() {
    let listaDeCoisas: string[] = [];

    for (let i = 0; i < 5; i++) {
        const nome = await perguntar(`Digite o que deseja adcionar a lista: ${i+1}`)
        listaDeCoisas.push(nome)
        }
    return console.log(listaDeCoisas)

}

    