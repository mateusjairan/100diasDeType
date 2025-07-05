type Pessoa = {
    nome: string,
    idade: number,
    estaVivo: boolean
}

const alguem:Pessoa ={
    nome: "Mateus",
    idade: 25,
    estaVivo: true
}

console.log(`${alguem.nome}, tem ${alguem.idade} e está ${alguem.estaVivo}.`)