class CotizadorHogar {
    constructor(metros2, alarma, factor) {
        this.metros2 = metros2
        this.alarma = alarma
        this.factor = factor
    }
    adicionalAlarma() {
        if (this.alarma) {
            return 1
        } else {
            return 1.12
        }
    }
    cotizarPoliza() {
        const costoTotal = this.factor * this.metros2 * this.adicionalAlarma()
                    console.log("El costo del seguro para su propiedad es: $", costoTotal)
    }
}

const valorFijo = 31.98

function cotizarSeguro() {
    debugger
    const metros2 = prompt("Ingrese los metros cuadrados de su hogar:")
    const alarma = confirm("¿Posee alarma instalada?")
    const cotizador = new CotizadorHogar(metros2, alarma, valorFijo)
            cotizador.cotizarPoliza()
}
