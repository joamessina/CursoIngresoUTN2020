function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	switch (mesDelAño) {
		case "Enero":
		case "Julio":
		case "Marzo":
		case "Mayo":
		case "Octubre":
		case "Diciembre":
		case "Agosto":
			alert("Si tiene 31 dias")
			break;
		case "Febrero":
			alert("Si tiene 28 dias")
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Si tiene 30 dias")
			break;
	}
	
	



}//FIN DE LA FUNCIÓN