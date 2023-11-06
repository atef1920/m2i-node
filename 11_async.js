//const {sleep} = require("../exercices/10_promise");

/**
 * Créez une fonction synchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser .then
 * 
 * contrainte:
 *    - votre fonction doit être synchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 * 
 */
const { sleep } = require("../m2i-node/10_promise");
const usingThen = (cb) => {
    sleep(2000).then(() => {
        cb();
    });
};
function callback(){
}
usingThen(callback);

/**
 * Créez une fonction asynchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser await
 * 
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */


const usingAwait = async (cb) => {
    await sleep(2000);
    return new Promise((resolve, reject) => {
        try {
            cb();
            resolve();
        } catch (error) {
            reject(error);
        }
    });
};

function monCallback() {
    console.log("callback");
}
console.log("Début");
usingAwait(monCallback)
    .then(() => {
        console.log("Fin");
    })
    .catch((error) => {
        console.error("Erreur: " + error);
    });

/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (body)
 * 
 * Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer
 * npm install axios
 * 
 * votre réponse doit être un objet json
 * 
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

//décommentez la ligne suivante une fois le package installé
const axios = require("axios");

const apiResponse = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        // Gérer les erreurs, par exemple :
        throw new Error('Erreur lors de la requête API : ' + error.message);
    }
};
const testUrl = 'https://jsonplaceholder.typicode.com/todos/1';
apiResponse(testUrl)
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });

module.exports = {usingThen, usingAwait, apiResponse};