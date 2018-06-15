/**
 * Dado um 'ano', retorna o século em que ele se encontra
 * @param {number} year - Um número positivo indicando um ano
 * @return {number} - O número do século do ano informado
 */
const centuryFromYear = year => Math.ceil(Number(year) / 100)

{
  // Forma alternativa utilizando ES5
  function centuryFromYear(year) {
    return Math.ceil(Number(year) / 100)
  }
}
