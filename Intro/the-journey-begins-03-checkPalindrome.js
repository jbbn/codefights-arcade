/**
 * Dado um texto retorna se é um palíndromo (*)
 * @param {string} inputString - Um texto não-vazio formado por caracteres minusculas
 * @return {boolean} - `true` se `inputString` for um palíndromo, senão `false`
*/
function checkPalindrome(inputString) {

  // obtem a quantidade de caracteres da metade do texto a ser verificado
  const until = Math.ceil(inputString.length / 2)

  // para cada caracter do texto (até sua metade),
  for (let position = 0; position < until; position++) {

    // obtem a posição do caracter oposto da outra metade da palavra
    let oppositePosition = inputString.length - 1 - position

    // se o caracter da repetição for diferente de seu oposto,
    if (inputString[position] !== inputString[oppositePosition]) {

      // podemos concluir que não é um palíndromo
      return false
    }
  }

  // se as regras acima não retornaram que não é, então, assumimos que é um palíndromo
  return true
}

// (*) Palíndromo: são palavras ou frases que podem ser lidas da esquerda para a direita ou da direita para a esquerda
