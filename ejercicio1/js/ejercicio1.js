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
function ordennarA()
{
    return console.log("eeeee");
}
//Apartado b) Ordenará el array de nombres de manera alfabética, pero teniendo en cuenta el tercer carácter de cada elemento de la colección
function ordenarB()
{
    
}
//Apartado c) Ordenará el array de nombres de manera alfabética, pero teniendo en cuenta el último caracter de cada elemento de la colección.
function ordenarC()
{  
    
}
//Apartado d) Ordenará el array de números de manera descendente y dando prioridad a los que son divisibles por 5.
function ordenarD()
{
   
}
//Apartado e) Ordenará el array de números de manera ascendente, pero dando prioridad a aquellos cuyo segundo dígito sea un 3
function ordenarE()
{  
    
}

