/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let PrecioUno;
	let PrecioDos;
	let PrecioTres;

	PrecioUno= parseInt(document.getElementById('txtIdPrecioUno').value)
	PrecioDos= parseInt(document.getElementById('txtIdPrecioDos').value)
	PrecioTres= parseInt(document.getElementById('txtIdPrecioTres').value)

	alert(PrecioUno+PrecioDos+PrecioTres);
}
function Promedio () 
{
	let PrecioUno;
	let PrecioDos;
	let PrecioTres;
	let promedio; 

	PrecioUno= parseInt(document.getElementById('txtIdPrecioUno').value)
	PrecioDos= parseInt(document.getElementById('txtIdPrecioDos').value)
	PrecioTres= parseInt(document.getElementById('txtIdPrecioTres').value)

	promedio= (PrecioUno+PrecioDos+PrecioTres)/3;
	
	alert(promedio);
}


function PrecioFinal () 
{
	let precioUno;
	let precioDos;
	let precioTres;
	let iva;
	let precioFinal;
	let precioFinal
	precioUno= parseInt(document.getElementById('txtIdPrecioUno').value)
	precioDos= parseInt(document.getElementById('txtIdPrecioDos').value)
	precioTres= parseInt(document.getElementById('txtIdPrecioTres').value)

	precio= (precioUno+PrecioDos+PrecioTres);
	iva=PrecioFinal*21/100;
	precioFinal= precio + iva

	alert("El precio final es: "+precioFinal);
}