// Entrada de Datos:
let consumo = Number (prompt('Ingrese su consumo'))
let descuento = ''


// Proceso de descuentos:
if(consumo <= 100){

    datoDescuento = '10%'
    descuento = consumo * 0.10

}else if(consumo > 100 && consumo <= 299){

    datoDescuento = '20%'
    descuento = consumo * 0.20
}else if (consumo >= 300){

    datoDescuento = '30%'
    descuento = consumo * 0.30
}


// Variables 
let montoConDescuento = consumo - descuento
let impuesto = montoConDescuento * 0.19


// Total a Pagar
let totalPagar = montoConDescuento + impuesto


// Salida de Datos
document.write(`<pre>
    Consumo: ${consumo}
    Descuento: ${descuento}  = osea el ${datoDescuento}
    Monto con el Descuento: ${montoConDescuento}
    Impuesto: ${impuesto}
    Total a pagar: ${totalPagar}
</pre>`)