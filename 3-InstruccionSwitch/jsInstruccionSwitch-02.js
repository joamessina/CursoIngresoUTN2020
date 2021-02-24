function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	switch (mesDelAño) {
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("falta para el invierno")
			break;
		case "Julio":
		case "Agosto":
				alert("Abrigate que hace frio!")
			break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
			alert("Ya paso el invierno")
			break;

	}




}//FIN DE LA FUNCIÓN