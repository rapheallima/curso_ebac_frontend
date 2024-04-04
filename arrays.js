const alunos = ['Gustavo', 'Julia', 'Paula', 'Mateus', 'Barbara', 'Denis'];
const notas = [4, 10, 7, 6, 5, 9];

const media = alunos.map((itemAtual, index) => {
    return {
        nome: itemAtual,
        nota: notas[index]
    };
});

const aprovados = media.filter(function (item) {
    return item.nota >= 6
})

const reprovados = media.filter(function (item) {
    return item.nota < 6
})

console.log("Aprovados: ", aprovados);
console.log("Reprovados: ", reprovados);

