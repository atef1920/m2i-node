
/**
 * Utiliser les ternaires en les chainants, pour éviter les if elseif else
 * 
 * Renvoyer ">" si a supérieur à b
 * Renvoyer "<" si a inférieur à b
 * Renvoyer "=" si a égal à b
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */


const ternaryChain = (a, b) => (a > b) ? ">" : (a < b) ? "<" : "=";
console.log(ternaryChain(8,4));
module.exports = ternaryChain;