/*
Agregar al ejercicio el costo y las complejidades que puede tener una tarea.

El costo en dinero de una tarea es igual al tiempo de la tarea multiplicado por un valor común y configurable para todas las complejidades. Además cada complejidad puede agregarle un porcentaje extra que se suma al costo.

    - Complejidad mínima: no agrega porcentaje extra.
    - Complejidad media: agrega un 5% extra
    - Complejidad máxima:
          - Si el tiempo es menor o igual a 10 unidades entonces agrega un extra del 7%
          - Si el tiempo es mayor a 10 unidades entonces agrega un extra del 7% más $1000 por cada día que la
             tarea exceda las 10 unidades.

A su vez las tareas que tengan más de 3 subtareas directas asociadas tienen un costo extra del 4% por overhead.


*/

import { Tarea, TareaCompuesta, Proyecto } from './proyectosTareas.js';
import { complejidadMinima, complejidadMedia, complejidadMaxima} from './complejidad.js';

const proyecto = new Proyecto()

const t1 = new Tarea("2.2.1", 3,complejidadMinima)

const t221 = new Tarea("2.2.1", 3,complejidadMedia)
const t222 = new Tarea("2.2.2", 4, complejidadMinima)
const t22 = new TareaCompuesta("2.2", 8,[t221,t222],complejidadMaxima)

const t21 = new Tarea("2.1", 6,complejidadMedia)
const t2 = new TareaCompuesta("2", 5,[t21,t22],complejidadMinima)

const t32 = new Tarea("3.2", 3, complejidadMedia)
const t31 = new Tarea("3.1", 6, complejidadMaxima)
const t3 = new TareaCompuesta("3", 7,[t32,t31],complejidadMedia)

proyecto.agregarTarea(t1)
proyecto.agregarTarea(t2)
proyecto.agregarTarea(t3)

proyecto.mostrarTareas()

console.log(`duracion total: ${proyecto.getDuracion()} minutos`)

