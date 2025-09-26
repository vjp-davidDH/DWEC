console.log("1. " + new Date().toString);
let id = setTimeout(() => console.log("2. " + new Date().toString), 5000);
console.log("3. " + new Date().toString);
let asd = prompt("Quieres para el TimeOut: ")
clearTimeout((asd === "si") ? clearTimeout(id) : "Éxito") 