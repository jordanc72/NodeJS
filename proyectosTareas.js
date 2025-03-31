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
    mostrarTarea(){
        console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`)
    }
}
class TareaCompuesta{
    constructor(codigo,duracion, tareas=[]){
        this.codigo = codigo;
        this.duracion = duracion;
        this.tareas = tareas;
    }
    agregar(unaTarea){
        this.tareas.push(unaTarea)
    }
    getDuracion(){
        return this.tareas.reduce((acumulador,indice) => 
            acumulador+ indice.getDuracion(),this.duracion)
    }
    getCodigo(){
        return this.codigo
    }
    mostrarTarea(){
        console.log(`Codigo: ${this.codigo} - Duracion: ${this.duracion}`);
        this.tareas.forEach((tarea)=> tarea.mostrarTarea());
    }
}

class Proyecto{
    constructor(tareas=[]){
        this.tareas= tareas
    }
    agregarTarea(tarea){
        this.tareas.push(tarea)
    }
    getDuracion(){
        return this.tareas.reduce((acum,tarea) => acum + tarea.getDuracion(),0)
    }
    mostrarTarea(){
        this.tareas.forEach((tarea)=> tarea.mostrarTarea())
    }
    cleanTareas(){
        tareas=[]
    }
    

}

//si la tarea < 5m cuesta $100, en caso contrario cuesta $200



/*
Existen 3 tipos de complejidades de las tareas
-trivial/minima => $100 * duracion
-Media => Si duracion >= 5, entonces $200 * duracion : 150 * duracion 
-Maxima => $300 * duracion + $500(si es simple) : $300 * duracion + $500 * cantidad de duración

tarea -> codigo duracion complejidad
tarea compleja -> codigo duracion tareas complejidad


Este es un Patrón ***Composite*** + Strategy

*/ 

module.exports = {Tarea, TareaCompuesta, Proyecto};