function mostrar()
{
//tomo la edad  
let edad = parseInt(document.getElementById("txtIdEdad").value)
//tomo la edad  
if (edad >= 18 ) {
	alert('Es mayor de edad')
} else {
	if (edad >= 13 && edad <= 17){
		alert ('Es adolescente')
	}else {
		if (edad < 13) {
			alert('Es un niño ')
		}
	}
}




}//FIN DE LA FUNCIÓN