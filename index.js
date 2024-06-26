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

//EXERCICIO 4 FUNÇÕES QUE RETORNAM FUNÇÕES(CLOSURES)

function contador() {
  let contador1 = 0;
  let contador2 = 0;
  return function () {
    contador1 += 1;
    contador2 += 1;
    return contador1, contador2;
  };
}

let contador1 = contador();
console.log(contador1());
console.log(contador1());
console.log(contador1());

let contador2 = contador();
console.log(contador2());
console.log(contador2());

// EXERCICIO 5, REDUÇÃO DE ARRAYS

function calcularProduto(numero) {
  let multiplicaNumeros = numero.reduce((total, num) => {
    return total * num;
  }, 1);
  return multiplicaNumeros;
}

let numero = [1, 2, 3, 4, 5];
console.log(calcularProduto(numero));

//EXERCICIO 6, FUNÇÃO DE ALTA ORDEM

function transformarArray(array, transformacao) {
  let novoArray = array.map((item) => {
    return transformacao(item)
  });
  return novoArray;
}

function dobrar(numero) {
  return numero * 2;
}

let numeros2 = [1, 2, 3, 4, 5];
console.log(transformarArray(numeros2, dobrar));


//EXERCICIO 7, COMPOSIÇÃO DE FUNÇÕES

function compor(f, g) {
  return function(x){
    return f(g(x))
  }
  }
  
  function somar1(x) {
  return x + 1;
  }
  
  function multiplicar2(x) {
  return x * 2;
  }
  
  let funcaoComposta = compor(somar1, multiplicar2);
  console.log(funcaoComposta(5)); // 11 (multiplicar2(5) = 10, somar1(10) = 11)
  
