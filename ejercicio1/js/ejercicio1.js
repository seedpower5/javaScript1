var arrayPalabras=["hola","Manzana", "queso","astrologia"];
var arrayNumeros=[2,4,1,4.5,9,3];
var opcion;
// La siguiente asignación del load no la puedes modificar
//esto es una funcion predeterminada que se utiliza para no leer el codigo js hasta no cargar todo el html 
window.onload = function()
{
    //cuando el usuario hace click en el boton activa la funcion manejador click
    document.getElementById("btnOrdenar").onclick = manejadorClick;
}
// En la siguiente función define el código principal
function manejadorClick()
{
    //recojemos el valor que el usuario introduce en el input 
   opcion = document.getElementById("inOpcion").value;
   //console.log(opcion);
   //aqui creamos un bucle if else para recoger todas las opciones posibles del ejercicio
   if(opcion=="A"||opcion=="a")
   {
        ordennarA();
   }else if (opcion=="B"||opcion=="b")
   {
        ordenarB();
   }else if (opcion=="C"||opcion=="c")
   {
        ordenarC();
   }else if(opcion=="D"||opcion=="d")
   {
        ordenarD();
   }else if(opcion=="E"||opcion=="e")
   {
        ordenarE();
   }else
   {
    document.getElementById("resultado").innerHTML="has introducido un valor erroneo este a de ser : A,B,C,D,E/a,b,c,d,e";
   }
   
}
//Apartado a) Ordenará el array de nombres de manera alfabética pero descendientemente
function ordennarA() {
     // Hacer una copia del array antes de ordenar
     var arrayOrdenado = arrayPalabras.slice().sort(function(a, b) {
         if (a.toLowerCase() < b.toLowerCase()) {
             return 1;
         } else if (a.toLowerCase() > b.toLowerCase()) {
             return -1;
         } else {
             return 0;
         }
     });
 
     // Mostrar el array ordenado
     document.getElementById("resultado").innerHTML = arrayOrdenado;
 }
//Apartado b) Ordenará el array de nombres de manera alfabética, pero teniendo en cuenta el tercer carácter de cada elemento de la colección
function ordenarB() {
     // Hacer una copia del array antes de ordenar
     var arrayOrdenado = arrayPalabras.slice().sort(function(a, b) {
         var tercerCaracterA = a[2].toLowerCase();
         var tercerCaracterB = b[2].toLowerCase();
 
         if (tercerCaracterA < tercerCaracterB) {
             return -1;
         } else if (tercerCaracterA > tercerCaracterB) {
             return 1;
         } else {
             return 0;
         }
     });
     document.getElementById("resultado").innerHTML=arrayOrdenado;
 }
 
//Apartado c) Ordenará el array de nombres de manera alfabética, pero teniendo en cuenta el último caracter de cada elemento de la colección.
function ordenarC() {
     // Hacer una copia del array antes de ordenar
     var arrayOrdenado = arrayPalabras.slice().sort(function(a, b) {
         var ultimoCaracterA = a.slice(-1).toLowerCase();
         var ultimoCaracterB = b.slice(-1).toLowerCase();
 
         if (ultimoCaracterA < ultimoCaracterB) {
             return -1;
         } else if (ultimoCaracterA > ultimoCaracterB) {
             return 1;
         } else {
             return 0;
         }
     });
     document.getElementById("resultado").innerHTML=arrayOrdenado;
 }
//Apartado d) Ordenará el array de números de manera descendente y dando prioridad a los que son divisibles por 5.
function ordenarD()
{
     // Hacer una copia del array antes de ordenar
     var arrayOrdenado = arrayNumeros.slice().sort(function(a, b) {
          // Dar prioridad a los números divisibles por 5
          if (b % 5 === 0 && a % 5 !== 0) {
              return 1;
          } else if (a % 5 === 0 && b % 5 !== 0) {
              return -1;
          } else {
              // Ordenar de forma descendente
              return b - a;
          }
      });
  
      // Mostrar el array ordenado
      document.getElementById("resultado").innerHTML=arrayOrdenado;
}
//Apartado e) Ordenará el array de números de manera ascendente, pero dando prioridad a aquellos cuyo segundo dígito sea un 3
function ordenarE() {
     // Función para obtener el segundo dígito de un número
     function obtenerSegundoDigito(numero) 
     {
     // Convertir el número a cadena y obtener el segundo carácter
     var segundoCaracter = numero.toString().charAt(1);
     
     // Convertir el segundo carácter a número y devolverlo
     return parseInt(segundoCaracter, 10);
     }

     // Hacer una copia del array antes de ordenar
     var arrayOrdenado = arrayNumeros.slice().sort(function(a, b) {
         // Obtener el segundo dígito de cada número
         var segundoDigitoA = obtenerSegundoDigito(a);
         var segundoDigitoB = obtenerSegundoDigito(b);
 
         // Dar prioridad a los números con segundo dígito igual a 3
         if (segundoDigitoA === 3 && segundoDigitoB !== 3) {
             return -1;
         } else if (segundoDigitoA !== 3 && segundoDigitoB === 3) {
             return 1;
         } else {
             // Ordenar de forma ascendente
             return a - b;
         }
     });
 
     // Mostrar el array ordenado
     document.getElementById("resultado").innerHTML=arrayOrdenado;
 }
 
 
