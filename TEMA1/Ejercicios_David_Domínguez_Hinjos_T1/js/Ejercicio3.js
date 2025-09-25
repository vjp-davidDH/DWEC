const array = [42, "Hola mundo", true, null, "Ana", 1, "David", 3, 5];
function encontrarTipos(array) {
    let num = 0;
    let str = "";
    let otros = null;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            num++;
        }
        else if (typeof array[i] === "string") {
            str++;
        }
        else {
            otros++;
        }
    }
    console.log("Este es el número de elementos de tipo Number dentro del array: " + num);
    console.log("Este es el número de elementos de tipo String dentro del array: " + str);
    console.log("Este es el número de elementos de todos los demás tipos dentro del array: " + otros);
}

encontrarTipos(array);