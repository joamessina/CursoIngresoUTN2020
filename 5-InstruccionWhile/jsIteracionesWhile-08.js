/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let flag = 0
	let numero
	let positivos = 0
	let negativos = 1
	let seguir

	do {
		numero = parseInt(prompt("ingrese un numero: "))

		if (numero >=0) {
			positivos = positivos + numero
		}
		else {
			flag = 1
			negativos = negativos * numero
		}

		seguir = prompt("Quiere ingresar otro numero?")
	} while (seguir == 'si')

	if (flag==0) {
		negativos=0
	}

	document.getElementById("txtIdProducto").value = negativos
	document.getElementById("txtIdSuma").value = positivos
}//FIN DE LA FUNCIÓN