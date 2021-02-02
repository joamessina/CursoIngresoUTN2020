/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo = document.getElementById("Largo").value;
var ancho = document.getElementById("Ancho").value;
var radio = document.getElementById("Radio").value;
var resultado;
largo = parseInt(largo);
ancho = parseInt(ancho);
radio = parseInt(radio);
radio = (largo + ancho)*2;
resultado = radio*3
alert("alambre a comprar es: " + resultado);
}
function Circulo () 
{
var largo = document.getElementById("Largo").value;
var ancho = document.getElementById("Ancho").value;
var radio = document.getElementById("Radio").value;
var area;
var resultado;
largo = parseInt(largo);
ancho = parseInt(ancho);
radio = parseInt(radio);
area = radio * radio* 3.14 ;
resultado = area*3
alert("alambre a comprar es: " + resultado);	
}
function Materiales () 
{
var largo = document.getElementById("Largo").value;
var ancho = document.getElementById("Ancho").value;
var radio = document.getElementById("Radio").value;
var resultado;
var cemento
var cal;
largo = parseInt(largo);
ancho = parseInt(ancho);
radio = parseInt(radio);
radio = largo * ancho;
cemento = radio * 2
cal = radio * 3
alert("la cantidad de cal es: " + cal + "..y de cemento.."+cemento);	
}