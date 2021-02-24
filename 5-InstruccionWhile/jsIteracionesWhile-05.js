/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{

	let sexoIngresado = prompt("ingrese f ó m .");
	
    while (sexoIngresado != "f" && sexoIngresado != "m")
    {
        alert ("sexo incorrecto");
		sexoIngresado = prompt ("ingrese su sexo, masculino como (m) y femenino como (f)");
    }

    txtIdSexo.value = "Su sexo es: "+ sexoIngresado;

	txtIdSexo.value=sexoIngresado;
}//FIN DE LA FUNCIÓN