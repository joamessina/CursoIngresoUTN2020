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
	let PrecioUno;
	let PrecioDos;
	let PrecioTres;
	let iva;
	let PrecioFinal;
	
	PrecioUno= parseInt(document.getElementById('txtIdPrecioUno').value)
	PrecioDos= parseInt(document.getElementById('txtIdPrecioDos').value)
	PrecioTres= parseInt(document.getElementById('txtIdPrecioTres').value)

	iva= 21/100;

	PrecioFinal= (PrecioUno+PrecioDos+PrecioTres);

	alert(PrecioFinal+PrecioFinal*iva);
}