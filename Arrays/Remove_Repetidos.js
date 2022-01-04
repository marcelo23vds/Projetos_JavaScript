const nomes = ['Marcelo', 'Marcelo', 'Bruna', 'Carlos', 'Carlos', 'Carlos', 'Lucas', 'Carlos', 'Bruna', 'Bruna'];

const nomesUnicos = new Set();

nomes.forEach((nome) => {
    nomesUnicos.add(nome);
});

console.log([...nomesUnicos.values()]);
