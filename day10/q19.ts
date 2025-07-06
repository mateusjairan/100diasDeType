let idade: number = 25;

if (idade < 2){
    console.log("A pessoa é um bebe");
}
else if (idade >= 2 && idade < 4)  {
    console.log("A pessoa é uma criancinha");
}
else if (idade > 4 && idade < 13) {
    console.log("A pessoa é uma criança");
}
else if (idade > 13 && idade < 20){
    console.log("A pessoa é um adolescente");
}
else if (idade > 20 && idade < 65){
    console.log("A pessoa é adulta")
}
else {
    console.log("A pessoa é idosa");
}