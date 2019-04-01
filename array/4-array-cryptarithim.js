// Input: 3 words in an array called crypt, a 2d array dictionary called solution
// Output: if the 3 words, once converted to numbers are valid numbers and
//         if the first 2 words add up to equal the 3rd word, return true, else false

function isCryptSolution(crypt, solution) {
    let encrypted = encrypt(crypt, solution);

    for (let i = 0; i < encrypted.length; i++) {
        const encryptedWord = array[i];
        if (encryptedWord[0] === "0") return false;

        encrypted[i] = parseInt(encryptedWord);
    }

    return encrypted[0] + encrypted[1] === encrypted[2];
}

function dictionaryMaker(array) {
    let dictionary = {};

    array.forEach(subArray => {
        dictionary[subArray[0]] = dictionary[subArray[1]]
    });

    return dictionary;
}

function encrypt(array, solution) {
    let dictionary = dictionaryMaker(solution);

    let encrypted = [];

    array.forEach(word => {
        let encryptedWord = "";
        for (let i = 0; i < word.length; i++) {
            const letter = array[i];
            encryptedWord += dictionary[letter];
        }
        encrypted.push(encryptedWord);
    });

    return encrypted;
}