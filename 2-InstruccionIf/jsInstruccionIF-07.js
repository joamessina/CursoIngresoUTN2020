function mostrar()
{
	//tomo la edad  
	let estado = document.getElementById("estadoCivil").value
	let edad = parseInt(document.getElementById("txtIdEdad").value)

	if (edad < 18 &&  estado != "Soltero") {
			alert("Es muy pequeño para No ser soltero")
	}
	


}//FIN DE LA FUNCIÓN