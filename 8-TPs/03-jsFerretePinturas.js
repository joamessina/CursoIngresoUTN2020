/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
var temperatura = parseInt(document.getElementById("Temperatura").value)
var celcius
celcius = (temperatura - 32) / 1.8
alert(temperatura +" Fahrenheit son: " + celcius + " celcius.")	
}

function CentigradosFahrenheit () 
{
var temperatura = parseInt(document.getElementById("Temperatura").value)
var Fahrenheit
Fahrenheit = temperatura * 1.8 + 32
alert(temperatura +" celcius son: " + Fahrenheit + " Fahrenheit.")	
}