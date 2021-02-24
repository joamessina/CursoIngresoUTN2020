/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	let numero
	let seguir
	let contadorPositivos = 0
	let contadorNegativos = 0
	let contadorCeros = 0
	let contadorPares = 0
	let acumuladorPositivos = 0
	let acumuladorNegativos = 0
	let promedioPositivos= 0
	let promedioNegativos= 0
	let diferencia

	do {
		numero = parseInt(prompt("ingrese un numero: "))

		if (numero < 0) {
			acumuladorNegativos += numero
			contadorNegativos++
		} else if (numero == 0) {
			contadorCeros++
		} else {
			acumuladorPositivos += numero
			contadorPositivos++
		}

		if (numero % 2 == 0) {
			contadorPares++
		}

		seguir = prompt("Quiere ingresar otro numero?")
	} while (seguir == 's');

	if (contadorPositivos > 0) {
		promedioPositivos = acumuladorPositivos / contadorPositivos
	}

	if (contadorNegativos > 0) {
		promedioNegativos = acumuladorNegativos / contadorNegativos
	} 
	
	diferencia = contadorPositivos - contadorNegativos

	
}//FIN DE LA FUNCIÓN