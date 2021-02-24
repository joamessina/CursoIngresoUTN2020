/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let numeroIngresado =  parseInt(prompt("ingrese un número entre 0 y 10."))
	let mensaje = alert("El numero no esta dentro del rango")
	while (numeroIngresado <=0 && numeroIngresado >= 9) {
		mensaje
		numeroIngresado=parseInt(prompt("ingrese un número entre 0 y 10."))
	}
	alert("el numero es correcto")
	document.getElementById("txtIdNumero").value = numeroIngresado

}//FIN DE LA FUNCIÓN