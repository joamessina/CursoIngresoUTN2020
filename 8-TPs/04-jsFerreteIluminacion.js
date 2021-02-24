/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	
    let cantidadLamp = parseInt(document.getElementById("txtIdCantidad").value)
    let marca = document.getElementById("Marca").value
    let descuento
    let precio
    let iibb
	//let importeFinal

    precio = cantidadLamp*35

	switch (cantidadLamp) {
		case 1:
		case 2:
			descuento = 0
			break;
		case 3:
			switch (marca) {
				case "ArgentinaLuz":
					descuento = 0.15
					break;
				case"FelipeLamparas":
				descuento = 0.10
				break;
				default:
					descuento = 0.05
			}
			case 4:
				switch (marca) {
					case "ArgentinaLuz":
					case"FelipeLamparas":
						descuento = 0.25
					break;
					default:
						descuento = 0.20
					break;
				}
			case 5:
					switch (marca) {
						case "ArgentinaLuz":
							descuento =0.40
						break;
						default:
							descuento = 0.30
						break;
					}
		default:
			descuento = 0.5
			break;
	}

        if (descuento >= 0.5)
        {
            precioConDescuento = precio-(precio*descuento);
        } 
        else 
        {
            precioConDescuento = precio;
        }
	if(precioConDescuento>120)
		{
			iibb= precioConDescuento*0.1
			
			
			alert("Usted pago " + iibb +  " de impuesto  ")
		}
		txtIdprecioDescuento.value = precioConDescuento;

	/*
    if (cantidadLamp >= 6){
        descuento = precio*(50/100)
		importeFinal = precio - descuento
        document.getElementById("txtIdprecioDescuento").value=importeFinal;
    }
    else if (cantidadLamp ==5){
		if(marca=="ArgentinaLuz"){
			descuento = precio*(40/100);
			importeFinal = precio - descuento
			document.getElementById("txtIdprecioDescuento").value=importeFinal;
		}else {
			descuento = precio*(30/100);
			importeFinal = precio - descuento
			document.getElementById("txtIdprecioDescuento").value=importeFinal;
		}
		} else if (cantidadLamp ==4){
			if ( marca=="ArgentinaLuz" || marca=="FelipeLamparas") {
				descuento = precio*(25/100);
				importeFinal = precio - descuento
				document.getElementById("txtIdprecioDescuento").value=importeFinal;	
			}
			else {
				descuento = precio*(20/100);
				importeFinal = precio - descuento
				document.getElementById("txtIdprecioDescuento").value=importeFinal;
			}
		}
		if (cantidadLamp ==3 && marca=="ArgentinaLuz"){
			descuento = precio*(15/100);
			importeFinal = precio - descuento
			document.getElementById("txtIdprecioDescuento").value=importeFinal;
		}
		else if (cantidadLamp ==3 ){
			if (marca=="FelipeLamparas") {
				descuento = precio*(10/100);
				importeFinal = precio - descuento
				document.getElementById("txtIdprecioDescuento").value=importeFinal;	
			}
			else {
				descuento = precio*(5/100);
				importeFinal = precio - descuento
				document.getElementById("txtIdprecioDescuento").value=importeFinal;
			}
		}
		if (cantidadLamp < 3) {
			descuento = precio*(0/100)
			importeFinal = precio - descuento
			console.log(importeFinal)
			document.getElementById("txtIdprecioDescuento").value=importeFinal;
		}		
		if(importeFinal>120)
		{
			iibb= importeFinal*10/100;
			importeFinal=importeFinal+iibb;
			alert("Usted pago " + importeFinal + " siendo " + iibb +  " el impuesto que se pagó ");
		}*/
	}