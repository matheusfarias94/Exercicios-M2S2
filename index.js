//EXERCICIO 1 Manipulação basica de arrays
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrarPares(numeros) {
  let numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
  });
  return numerosPares;
}
console.log(filtrarPares(numeros));



//EXERCICIO 2 Manipulaçao de objetos
let pessoas = [
  { nome: "Alice", idade: 17 },
  { nome: "Bob", idade: 22 },
  { nome: "Charlie", idade: 16 },
  { nome: "David", idade: 19 },
];

function filtrarAdultos(pessoas) {
  let filtroAdultos = pessoas
    .filter((pessoa) => pessoa.idade >= 18)
    .map((pessoa) => pessoa.nome);
  return filtroAdultos;
}

console.log(filtrarAdultos(pessoas));
