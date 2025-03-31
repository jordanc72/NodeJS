class absComplejidad{
    constructor(){

    }
}

class complejidadMinima extends absComplejidad{
    constructor(tiempo){
        this.tiempo = tiempo
    }
}

class complejidadMedia extends absComplejidad{
    constructor(tiempo){
        this.tiempo = tiempo
    }
    costoTotal(){
        calculo = Proyecto.getDuracion()* 1.05

        return calculo
    }
}

class complejidadMaxima extends absComplejidad{
    
}


import { Tarea, TareaCompuesta, Proyecto} from proyectoTareas.js