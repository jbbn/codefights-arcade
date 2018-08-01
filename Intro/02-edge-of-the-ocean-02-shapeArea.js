/**
 * Dado um inteiro, encontrar a área do polígono n-interessante
 * @param {number} n - Inteiro
 * @returns {number} - A área do polígono n-interessante
 */
const shapeArea = n => (n === 1 ? 1 : n > 1 ? Math.pow(n, 2) + Math.pow(n - 1, 2) : null)

// SE o inteiro fornecido for 1
// ENTÃO, seguindo a regra apresentada a área é 1
// SENÃO, SE o inteiro for maior que 1
// Somar n^2 com (n-1)^2

{
  // Forma alternativa utilizando ES5
  function shapeArea(n) {
    if (n === 1) return 1
    if (n > 1) return Math.pow(n, 2) + Math.pow(n - 1, 2)
  }
}
