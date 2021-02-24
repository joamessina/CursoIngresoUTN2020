/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada = prompt("ingrese la clave.")
	let mensaje = alert("No es la clave ingresada")
	while (claveIngresada != "utn750") {
		mensaje
		claveIngresada = prompt("ingrese nuevamente")
	}
	alert("Clave correcta")
	
}//FIN DE LA FUNCIÓN
