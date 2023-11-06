
/**
 * retourne la valeur la plus grande des deux paramètres
 * 
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
const ternaire = (a , b) =>  (a > b) ? a : b;
const reslt = ternaire(2, 5)
console.log(reslt);

module.exports = ternaire;