let funcionLambda = (arg1, arg2) => {return arg1 + arg2}

console.log(funcionLambda(3,2));

let funcionProcesadoraPar = function (arg1, arg2, funcionProcesadora) {
    return funcionProcesadora(arg1, arg2); 
}

console.log("Esta vez procesamos una funcion de 3 y 2: ") + funcionProcesadoraPar(3,2,(n1,n2) => {return n1+n2});

console.log("Esta vez procesamos una funcion de 3 y 2: ") + funcionProcesadoraPar(3,2,(n1,n2) =>  n1*n2);

let funcionProcesadoraTrio = function (arg1,arg2,arg3,funcionProcesadora){
    return funcionProcesadora(arg1,arg2,arg3); 
}


console.log("Esta vez sumamos tres numeros: " + funcionProcesadoraTrio(2,5,4,(n1,n2,n3) => {return n1+n2+n3}));

console.log("Esta vez muestro el mayor de los 3: " + funcionProcesadoraTrio(2,5,4,(n1,n2,n3) => {return n1>n2 && n1>n3 ? n1: n2>n1 && n2>n3 ? n2 : n3 }));

console.log("Esta vez muestro el menor de los 3: " + funcionProcesadoraTrio(2,5,4,(n1,n2,n3) => {return n1<n2 && n1<n3 ? n1: n2<n1 && n2<n3 ? n2 : n3 }));

console.log("Esta vez sumamos el primero con el tercero y lo dividimos con el segundo: " + funcionProcesadoraTrio(2,5,4,(n1,n2,n3) => {return (n1+n3)/n2}));
