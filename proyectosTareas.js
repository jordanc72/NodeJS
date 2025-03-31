class Tarea{
    constructor(codigo,duracion){
        this.codigo = codigo,
        this.duracion = duracion
    }
    getDuracion(){
        return this.duracion
    }
    getCodigo(){
        return this.codigo
    }
}
class TareaCompuesta{
    constructor(codigo,duracion, tareas=[]){
        this.codigo = codigo
        this.duracion = duracion
        this.tareas = tareas
    }
    agregar(unaTarea){
        this.tareas.push(unaTarea)
    }
    getDuracion(){
        return this.tareas.reduce((acumulador,indice) => acumulador+ indice.getDuracion(),this.duracion)
    }
    getCodigo(){
        return this.codigo
    }
}

class Proyecto{
    constructor(tareas=[]){
        this.tareas= tareas
    }
    getDuracion(){
        return this.duracion
    }
    getCosto(){
        return this.duracion <= 5? 100: 200
    }

}

//si la tarea < 5m cuesta $100, en caso contrario cuesta $200

const t1221 = new Tarea("1.2.2.1", 3)
const t1222 = new Tarea("1.2.2.2", 6)
const t122 = new TareaCompuesta("1.2.2", 1,[t1221,t1222])

const t121 = new Tarea("1.2.1", 4)
const t12 = new TareaCompuesta("1.2", 4,[t121,t122])

const t132 = new Tarea("1.3.2", 1)
const t131 = new Tarea("1.3.1", 2)
const t13 = new TareaCompuesta("1.3", 3,[t132,t131])

console.log("duracion total: ")



/*
Existen 3 tipos de complejidades de las tareas
-trivial/minima => $100 * duracion
-Media => Si duracion >= 5, entonces $200 * duracion : 150 * duracion 
-Maxima => $300 * duracion + $500(si es simple) : $300 * duracion + $500 * cantidad de duración

tarea -> codigo duracion complejidad
tarea compleja -> codigo duracion tareas complejidad


Este es un Patrón ***Composite*** + Strategy

*/ 