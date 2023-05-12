// Variables
var precioBase = 300000;
var descuento = 50;

// Metodo o funcion que procesa el descuento y valida que este correcto
function calcularPrecio (precioBase, descuento){
    if (precioBase <= 0 || descuento < 0 || descuento > 100){
        return console.log("Los valores ingresados son invalidos");
    }
    else if(descuento == 0){
        return console.log("$" + precioBase + " no tiene descuento");
    }
    else if(descuento > 0 && descuento <= 100){
        return console.log("El precio final con descuento es $" + (precioBase - (precioBase * descuento / 100)));
    }
}

// Invocacion del metodo
calcularPrecio(precioBase, descuento)