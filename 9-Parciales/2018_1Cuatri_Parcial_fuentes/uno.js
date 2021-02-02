
function mostrar()
{
 let altura;
 let anchura;
 let perimetro;

 altura = parseInt(prompt("Por favor ingrese el alto del rectángulo y presione aceptar."))

 anchura = parseInt(prompt("Por favor ingrese el ancho del rectángulo y presione aceptar."))

 perimetro = (anchura + altura) * 2;

 alert('El perimetro es: ' + perimetro)
}
