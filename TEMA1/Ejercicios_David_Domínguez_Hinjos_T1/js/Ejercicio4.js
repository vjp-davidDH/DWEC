function funcionConversiones(producto = "Producto generico", precio = 100, impuesto = 21) {
    producto = String(producto);
    precio = Number(precio);
    impuesto = Number(impuesto);
    console.log("El producto es: " + producto + " el precio es: " + precio + " su impuesto es: " + impuesto);
}

funcionConversiones();