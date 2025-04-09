class Tarea{
    constructor(codigo,duracion, complejidad){
        this.codigo = codigo,
        this.duracion = duracion
        this.complejidad = complejidad;
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
    cambiarComplejidad(unaComplejidad){
        return this.complejidad = unaComplejidad;
    }
}
class TareaCompuesta{
    constructor(codigo,duracion, tareas=[], complejidad){
        this.codigo = codigo;
        this.duracion = duracion;
        this.tareas = tareas;
        this.complejidad = complejidad;
    }
    agregarTarea(unaTarea){
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
    recargo(){
        return this.tareas.length > 3? 0.04 : 0;
    }
    getCosto(){
        const costo = this.tareas.reduce((acum, itera)=> acum + itera.getCosto(), 0)
        const recargo = this.recargo()
        return costo * (1 + recargo)
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
    mostrarTareas(){
        this.tareas.forEach((tarea)=> tarea.mostrarTarea())
    }
    cleanTareas(){
        this.tareas=[]
    }
    
}

//Este es un Patrón ***Composite*** + Strategy

export {Tarea, TareaCompuesta, Proyecto}