function calcularWinRate(vitorias, derrotas) {
    return vitorias - derrotas  
}

function DesafioFelipao(vitorias, derrotas) {
    let saldo = calcularWinRate(vitorias, derrotas)
    let rank

    if (saldo < 10)
        rank = "Iron"
    else if (saldo >= 10 && saldo <= 20)
        rank = "Bronze"
    else if (saldo >= 21 && saldo <= 50)
        rank = "Silver"
    else if (saldo >= 51 && saldo <= 80)
        rank = "Gold"
    else if (saldo >= 81 && saldo <= 90)
        rank = "Diamond"
    else if (saldo >= 91 && saldo <= 100)
        rank = "Legendary"
    else if (saldo >= 101)
        rank = "Imortal"

    return `O Herói tem o saldo de ${saldo} vitórias e está no ranking: ${rank}.`
}

let vitorias = 70
let derrotas = 10

console.log(DesafioFelipao(vitorias, derrotas))
