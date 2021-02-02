function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero = Math.floor(Math.random() * 11);
	
	if (numero >=9 ) {
		alert("Excelene")
	} else{
		if (numero >= 4 && numero <= 8) {
			alert("Aprobo")
		}else {
			if (numero < 4) {
				alert("Vamos, la proxima se puede")
			}
		}
	}

}//FIN DE LA FUNCIÓN