/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let stop = 'si'
	let numero
	let acumulador = 0
	let contador = 0

	while (stop =='si') {
		numero= parseInt(prompt("ingrese un numero: "))
		acumulador = acumulador + numero
		contador++
		stop = prompt("Quiere ingresar otro numero?")
	}
	promedio = acumulador / 5

	document.getElementById("txtIdSuma").value = acumulador
	document.getElementById("txtIdPromedio").value = promedio
}//FIN DE LA FUNCIÓN