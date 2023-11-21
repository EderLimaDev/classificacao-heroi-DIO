
// Insira o nome do seu Herói!

let nomeDoHeroi = "Eder Lima";

// Insira a quantidade de XP já adquirida!

let quantidadeDeXp = 8000;


let nivel = "";


// Classificação de Nível / XP!

if(quantidadeDeXp < 1000) {
    nivel = "Ferro"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel)
} else if (quantidadeDeXp >= 1001 && quantidadeDeXp <= 2000) {
    nivel = "Bronze"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel)
} else if (quantidadeDeXp >= 2001 && quantidadeDeXp <= 5000) {
    nivel = "Prata"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel)
} else if (quantidadeDeXp >= 6001 && quantidadeDeXp <= 7000) {
    nivel = "Ouro"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel)
} else if (quantidadeDeXp >= 7001 && quantidadeDeXp <= 8000) {
    nivel = "Platina"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel)
} else if (quantidadeDeXp >= 8001 && quantidadeDeXp <= 9000) {
    nivel = "Ascendente"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel)
} else if (quantidadeDeXp >= 9001 && quantidadeDeXp <= 10000) {
    nivel = "Imortal"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel)
} else {
    nivel = "Radiante"
    console.log("O Herói de nome " + nomeDoHeroi + " está no nível de " + nivel)
}

 
 






