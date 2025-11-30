class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {

        let ataque
        
        if (this.tipo === "monge") {
            ataque = "artes marciais"
        } else {
            ataque = "um ataque desconhecido"
        }

        console.log(`o ${this.tipo} atacou usando ${ataque}`)
    }
}

let heroi1 = new Heroi("KakarottoUzumaki", 20, "monge")


heroi1.atacar()

