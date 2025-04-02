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

const t1221 = new Tarea("1.2.2.1", 3,complejidadMedia)
const t1222 = new Tarea("1.2.2.2", 6, complejidadMinima)
const t122 = new TareaCompuesta("1.2.2", 1,[t1221,t1222],complejidadMaxima)

const t121 = new Tarea("1.2.1", 4,complejidadMedia)
const t12 = new TareaCompuesta("1.2", 4,[t121,t122],complejidadMinima)

const t132 = new Tarea("1.3.2", 1, complejidadMedia)
const t131 = new Tarea("1.3.1", 2, complejidadMaxima)
const t13 = new TareaCompuesta("1.3", 3,[t132,t131],complejidadMedia)

proyecto.agregarTarea(t12)
proyecto.agregarTarea(t13)

proyecto.mostrarTareas()


console.log(`duracion total: ${t12.getDuracion()} minutos`)

