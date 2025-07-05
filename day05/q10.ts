import * as readline from 'readline';

let lista_de_convidados: string[] = ["Gugu", "Jotaro", "Goku", "Naruto", "Luffy"]

function convidarConvidados(lista_de_convidados: string[]): void {
    lista_de_convidados.forEach((convidado: string) => {
        console.log(`Olá ${convidado}, você está convidado para a festa!`);
    });
}

let convidadofaltante: string = "Goku";

console.log(`O convidado ${convidadofaltante} não poderá comparecer à festa.`);

let novoConvidado: string = "Saitama";

lista_de_convidados[lista_de_convidados.indexOf(convidadofaltante)] = novoConvidado;

lista_de_convidados.forEach((convidado: string) => {
    console.log(`Olá ${convidado}, você está convidado para a festa!`);
})

console.log(`A quantidade de convidados é: ${lista_de_convidados.length}`);



