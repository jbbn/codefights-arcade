/**
 * Dada uma matriz de inteiros, encontra um par de elementos adjacentes com o maior produto e retorna este produto
 * @param {number} arr - Uma matriz de inteiros contendo pelo menos dois elementos
 * @return {number} - Produto dos números adjacentes
 */
const adjacentElementsProduct = arr =>
  arr.reduce((greater, curr, i, arr) => {
    // calcula-se o produto entre a posição atual e a próxima posição
    let product = curr * arr[i + 1]

    // sendo a posição atual a primeira da matriz
    // OU o produto obtido sendo maior que o último armazenado
    // ENTÃO retornar-se este novo produto para o acumulador como sendo o maior
    // SENÃO retorna-se para o acumulador seu próprio valor
    return i === 0 || product > greater ? Number(product) : greater
  }, 0) // < inicia o acumulador com 0

{
  // Forma alternativa utilizando ES5
  /**
   * Dada uma matriz de inteiros, encontra um par de elementos adjacentes com o maior produto e retorna este produto
   * @param {number} arr - Uma matriz de inteiros contendo pelo menos dois elementos
   * @return {number} - Produto dos números adjacentes
   */
  function adjacentElementsProduct(arr) {
    // armazenar sempre o maior produto nesta variável
    let greater = 0

    // percorrendo todas as posições da matriz - exceto a última posição
    for (let i = 0; i < arr.length - 1; i++) {
      // calcula-se o produto entre a posição atual e a próxima posição
      let product = arr[i] * arr[i + 1]

      // sendo a posição atual a primeira da matriz
      // OU o produto obtido sendo maior que o último armazenado
      if (i === 0 || product > greater) {
        // armazena-se este novo produto como sendo o maior
        greater = Number(product)
      }
    }

    // após percorrer todas as posições, podemos retornar o número armazenado
    return greater
  }
}
