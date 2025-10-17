let monumento = {
       "uri": {
          "type": "uri",
          "value": "http://opendata.caceres.es/recurso/turismo/monumentos/Monumento/29-concatedral-de-santa-maria"
        },
        "geo_long": {
          "type": "typed-literal",
          "datatype": "http://www.w3.org/2001/XMLSchema#double",
          "value": "-6.37013"
        },
        "geo_lat": {
          "type": "typed-literal",
          "datatype": "http://www.w3.org/2001/XMLSchema#double",
          "value": "39.4746"
        },
        "clase": {
          "type": "typed-literal",
          "datatype": "http://www.w3.org/2001/XMLSchema#string",
          "value": "CONCATEDRAL "
        },
        "om_tipoMonumento": {
            "type": "literal",
            "value": "Concatedral"
        },
        "rdfs_label": {
          "type": "typed-literal",
          "datatype": "http://www.w3.org/2001/XMLSchema#string",
          "value": "de Santa Maria"
        },
        "tieneEnlaceSIG": {
          "type": "typed-literal",
          "datatype": "http://www.w3.org/2001/XMLSchema#string",
          "value": "http://sig.caceres.es/serweb/fichasig/fichatoponimia.php?mslink=1163 "
        }
};

monumento.pintarInfo = function () {
    console.log("El nombre del monumento es: " + monumento.rdfs_label.value);
    console.log("El tipo del monumento es: " + monumento.om_tipoMonumento.value);
    console.log("La latitud del monumeto es: " + monumento.geo_lat.value);
    console.log("La longitud del monumento es: " + monumento.geo_long.value);
    console.log("la url del monumento es: " + monumento.uri.value);
};

console.log("El nombre del monumento es: " + monumento.rdfs_label.value);
console.log("El tipo del monumento es: " + monumento.om_tipoMonumento.value);
console.log("\nEsta informacion esta pintada con la funcion pintarInfo():");
console.log(monumento.pintarInfo());

