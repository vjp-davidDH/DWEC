let array = [2,2,2,2,2,2,2,3,1]

function procesarArray(array) {
    if (array.every(item => item instanceof Number || typeof item === "number")) {
        for (let i = 0; i < array.length; i++) {
            array[i] = array[i] * 2;
        }
        console.log(array.join('#'));
        alert((array.every(n => n % 2 === 0)) ? "Éxito" : "Error");
    }
    else {
        alert("Error.")
    }
}
console.log(array.join('#'));
procesarArray(array);