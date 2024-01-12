// La siguiente asignación del load no la puedes modificar
window.onload = function() {
    // Cuando el usuario hace clic en el botón, activa la función manejadorClick
    document.getElementById("btnComprobar").onclick = manejadorClick;
}

// En la siguiente función define el código principal
function manejadorClick() {
    // Recolectamos el valor introducido por los inputs
    var input = document.getElementById("inEntrada").value;

    // Sacamos el resultado
    comprobarDatos(input);
}

// Aquí comprobaremos todos los datos
function comprobarDatos(input) {
    var resultado = "";
    var contador = 0;

    // Si el valor es nulo o vacío
    if (input == "" || input == null || input == undefined) {
        resultado = "No se ha introducido nada";
    // Si el valor no es un número
    } else if (isNaN(input)) {
        // Contar el número de vocales en la cadena
        for (let i = 0; i < input.length; i++) {
            // Verificar si el carácter actual es una vocal
            if ("aeiouAEIOU".includes(input[i])) {
                contador++;
            }
        }

        resultado = "El valor introducido es un texto. La longitud del texto es: " + input.length + ". El número de vocales es: " + contador;
    } else {
        //si esto se cumple el valor es decimal
        if (input % 1 !== 0) {
            // Obtener la parte entera
            var parteEntera = Math.floor(input);
            
            // Obtener la parte decimal
            var parteDecimal = input - parteEntera;

            // Obtener el entero superior más próximo
            var enteroSuperior = Math.ceil(input);

            resultado = "El valor introducido es decimal.\n" +
                        "Parte entera: " + parteEntera + "\n" +
                        "Parte decimal: " + parteDecimal + "\n" +
                        "Entero superior más próximo: " + enteroSuperior;
        } else {
            // Comprobar divisibilidad
            var arrayDivisibles = [];
            var esPrimoResultado = false;

            for (let i = 1; i < input; i++) {
                if (input % i === 0) {
                    arrayDivisibles.push(i);
                }
            }

            // Comprobar si es primo
            if (esPrimo(input)) {
                esPrimoResultado = true;
            }

            resultado = "El valor introducido es un número entero. Divisible por: " + arrayDivisibles.join(', ') + ". Es primo: " + esPrimoResultado;
        }
    }

    document.getElementById("divSalida").innerHTML=resultado;
}

function esPrimo(input) {
    if (input <= 1) {
        return false;
    }
    for (let i = 2; i < input; i++) {
        if (input % i === 0) {
            return false;
        }
    }
    return true;
}
