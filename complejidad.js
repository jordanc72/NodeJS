class absComplejidad{
    costoExtra(tiempo){
        return 0
}
    costoExtra(tiempo, valorFijo){
        const extra = this.costoExtra(tiempo) 
        const costoBasico = tiempo * valorFijo 
        return costoBasico * extra
}
}
class complejidadMinima extends absComplejidad{
    costoExtra(tiempo){
        return 0
    }
}

class complejidadMedia extends absComplejidad{
    costoExtra(tiempo){
        return 0.05
    }
}

class complejidadMaxima extends absComplejidad{
    costoExtra(tiempo, valorFijo){
        const costoBasico = tiempo * valorFijo 
        return tiempo <= 10? costoBasico* 0.07 : costoBasico* 0.07 + 1000 * (tiempo - 10)
    }
    
}


export { complejidadMinima, complejidadMedia, complejidadMaxima}