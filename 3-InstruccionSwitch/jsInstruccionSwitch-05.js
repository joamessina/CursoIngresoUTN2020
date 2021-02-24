function mostrar()
{
	//tomo la hora
	let horaDelDia =parseInt(document.getElementById("txtIdHora").value);
	switch (horaDelDia) {
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
		case 13:
			alert("Es de mañana")
			break;
		case 14:
			alert("Ya es de la tarde")
			break;
		case 20:
			alert("Ya es de noche")
	}
}//FIN DE LA FUNCIÓN