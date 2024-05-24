let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrarPares(numeros) {
  let numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0;
  });
  console.log(numerosPares);
}
filtrarPares(numeros);
