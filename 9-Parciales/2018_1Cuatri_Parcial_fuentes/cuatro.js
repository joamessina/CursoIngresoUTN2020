function mostrar()
{
    let primerNum = parseInt(prompt("Ingrese un numero:"))
    let segundoNum = parseInt(prompt("Ingrese un segundo numero:"))

    if (primerNum == segundoNum) {
        alert(primerNum + segundoNum.toString())
    } else if(primerNum > segundoNum){
        alert(primerNum - segundoNum)
    } else {
        let suma = primerNum + segundoNum
        if(suma > 10){
            alert("La suma es " + suma + " y supero el 10")
        } else {
            alert(primerNum + segundoNum)
        }
    }
}