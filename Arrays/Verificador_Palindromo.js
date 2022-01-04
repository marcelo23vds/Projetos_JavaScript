const listaPalavras = ['ovo', 'caixa', 'reviver', 'computador', 'salas'];

const verificaPalindrome = string => string === string.split('').reverse().join('');

const resultados = listaPalavras.map(verificaPalindrome);

console.log(resultados);
