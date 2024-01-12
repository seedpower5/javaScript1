//esto es como un windowonload se asegura de cargar el html antes de ejecutar el codigo js 
document.addEventListener("DOMContentLoaded", function() {
    // Recolectamos la salida en una variable
    const divSalida = document.getElementById("divSalida");
  
    function generarNumeroAleatorio() {
      // Generamos un número aleatorio entre 2 y 6 
      const numeroAleatorio = Math.floor(Math.random() * (6 - 2 + 1) + 2);
  
      // Añadimos el valor del contador con el número aleatorio
      let contador = numeroAleatorio;
  
      // Creamos una función que va restando y actualizando el contador a la vez que va mostrando el mensaje 
      function actualizarContador() {
        divSalida.innerText = `Vas a tener que esperar ${contador} segundos`;
  
        if (contador === 0) {
          generarNumeroAleatorio();
        } else {
          contador--;  
          setTimeout(actualizarContador, 1000);
        }
      }
  
      // Hacemos que se actualice cada segundo
      setTimeout(actualizarContador, 1000);
    }
  
    // Ejecutamos la función
    generarNumeroAleatorio();
  });
  