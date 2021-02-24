/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let seguir
	let numero
	let min
	let max
	let flag= 0
	do {
		numero = parseInt(prompt("ingrese un numero"))
		if (flag == 0 || numero > max) {
			max = numero
		}  
		if (flag == 0 || numero < min) {
			min = numero
			flag = 1
		}
		seguir = prompt("quiere ingresar otro numero?")
	} while (seguir == 's');

	document.getElementById("txtIdMaximo").value=max
	document.getElementById("txtIdMinimo").value=min
	
}//FIN DE LA FUNCIÓN