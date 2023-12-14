let nome: string = "evanio";
let idade: number = 28;
let altura: number = 1.78;
let ligado: boolean = true;

type Meuentregador = {
    nome: string;
    idade: number;
    cidade: string;
    Estado: string;
}


let entregador: Meuentregador = {
    nome: "evanio",
    idade: 28,
    cidade: "Fortaleza",
    Estado: "Ceará",
};
// existem 2 tipos de fazer um array
let dados: string[] = ["evanio", "edson"]
let dados2: Array<string> = ["toin", "Junin", "douglas"]
// caso querira fazer um array com numeros e letras
let infos: (string | number)[] = ['joao', 'alan',1];
// tupla ela restringe a seguir a ordem da tipagem
let boletos:[string,number,string,number] = ['agua', 65, 'luz', 200]

console.log(entregador);
function calcSimples(x: number, y: number): number {

    return x + y;
}

let soma: number = calcSimples(5,7)
console.log(soma)