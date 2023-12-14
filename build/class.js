"use strict";
class entregadore {
    constructor(nome, idade, entregas) {
        this.nome = nome;
        this.idade = idade;
        this.entregas = entregas;
    }
    calc() {
        return this.entregas * 6.50;
    }
}
const motoboy = new entregadore("evanio", 29, 300);
console.log(`o entregador ${motoboy.nome} ganhou esse mês ${motoboy.calc()}`);
