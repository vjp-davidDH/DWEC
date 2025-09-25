array = [435, 243, 5423456, 456, 546, 3459, 3, 58, 34, 56, 436, 3456]

function ordenarArray(array) {
    let aux = 0;
    for (let j = 1; j < array.length - 1; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                aux = array[i];
                array[i] = array[i + 1];
                array[i + 1] = aux;
            }
        }
    }
    console.log(array);
}

ordenarArray(array);
