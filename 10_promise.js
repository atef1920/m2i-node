
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

const sleep = (val) => {
    return new Promise((resolve) => {
        setTimeout(resolve, val);
    });
};
async function main() {
    await sleep(2000);
}
main();
module.exports = {sleep};