function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero = Math.floor(Math.random() * 11);
	
	if (numero >=9 ) {
		alert("excelente aprobo con: " + numero)
	} else if(numero >= 4 && numero <= 8){
			alert("Aprobo con: " + numero)
		}else {
			alert("Vamos, la proxima se puede")
	}

}