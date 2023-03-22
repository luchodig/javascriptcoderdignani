const PrecioGramo = 1800
let continuar = true 
let reprocann = true
const mensajeBienvenida = "Debes ingresar una valor en gramos correspondientes a la cuota de cannabis medicinal mensual :"

function CotizarCuotaMensual() {
    reprocann = confirm("¿Quieres socio del club Cannabico Green Garden?")
    if (reprocann === true) {
        descuento = 0.85
    } else {
        descuento = 1
    }
    Cuota = parseInt(prompt(mensajeBienvenida))
    if (Cuota >=10 && Cuota <=40) {
        alert("la cuota es de : " + Cuota + " de gramos" + " con un valor de " + (Cuota * PrecioGramo * descuento))
    }else {
        alert("Las cuotas Van desde los 10 gramos hasta los 40 gramos como cuota maxima")
        return PreguntarDescuento() 
    }
}

function PreguntarDescuento() {
    while(continuar) {
        CotizarCuotaMensual()
        continuar = confirm("deseas conocer otro precio?")

    }
    alert("no hay problema, gracias por su visita")
}

function PreguntarPrecio() {
    while (precio) {
        CotizarCuotaMensual()
        precio = confirm("deseas hacer otra consulta?")
    }
    alert("no hay problema, hasta luego")
}


