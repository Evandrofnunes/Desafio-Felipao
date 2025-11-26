let xp = 10001;
let Heroi = "Menino aranha";
let QuantidadeXP = "";

if (xp < 1000) {
    QuantidadeXP = "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    QuantidadeXP = "Bronze";
} else if (xp >= 2001 && xp <= 5000) {
    QuantidadeXP = "Prata";
} else if (xp >= 5001 && xp <= 8000) {
    QuantidadeXP = "Platina";
} else if (xp >= 8001 && xp <= 9000) {
    QuantidadeXP = "Ascendente";
} else if (xp >= 10001) {
    QuantidadeXP = "Radiante";
} else {
    QuantidadeXP = "XP inválido!";
}

console.log(`${Heroi} — devido à sua experiência de ${xp} — aqui está o seu nível: ${QuantidadeXP}`); 