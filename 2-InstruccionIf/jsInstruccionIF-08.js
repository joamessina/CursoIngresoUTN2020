function mostrar()
{
	//tomo la edad  
	let estado = document.getElementById("estadoCivil").value
	let edad = parseInt(document.getElementById("txtIdEdad").value)

	if (edad < 18 &&  estado != "Soltero") {
			
	} else {
		if (edad >= 18 &&  estado == "Soltero") {
			alert("Es soltero y no es menor")
		}
	}
	

}//FIN DE LA FUNCIÓN