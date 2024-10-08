function calcularSaldoVitorias(vitorias, derrotas) {

    let saldoVitorias = vitorias - derrotas;

    return saldoVitorias;
}


function verificarNivel(saldoVitorias){
    let nivel;

    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return nivel;
}


let vitorias = 500;
let derrotas = 5;


let saldoVitorias = calcularSaldoVitorias(vitorias, derrotas);

let nivel = verificarNivel(saldoVitorias);


console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`);