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

//EXERCICIO3 Agrupamento de dados
let produtos = [
  { categoria: "eletrônicos", preco: 99.99 },
  { categoria: "livros", preco: 19.99 },
  { categoria: "eletrônicos", preco: 199.99 },
  { categoria: "livros", preco: 29.99 },
  { categoria: "roupas", preco: 49.99 },
];

function agruparPorCategoria(produtos) {
    // Agrupa os produtos por categoria e calcula a soma dos preços
    let somaPorCategoria = produtos.reduce((acumulador, produtoAtual) => {
      const chave = produtoAtual.categoria;
      
      // Se a categoria já existe no acumulador, adiciona o preço atual à soma existente
      if (acumulador[chave]) {
        acumulador[chave] += produtoAtual.preco;
      } else {
        // Caso contrário, cria uma nova entrada com a categoria e o preço atual
        acumulador[chave] = produtoAtual.preco;
      }
      
      return acumulador;
    }, {});
    
    return somaPorCategoria;
  }
  
  console.log(agruparPorCategoria(produtos));