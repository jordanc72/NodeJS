const t1221 = new Tarea("1.2.2.1", 3)
const t1222 = new Tarea("1.2.2.2", 6)
const t122 = new TareaCompuesta("1.2.2", 1,[t1221,t1222])

const t121 = new Tarea("1.2.1", 4)
const t12 = new TareaCompuesta("1.2", 4,[t121,t122])

const t132 = new Tarea("1.3.2", 1)
const t131 = new Tarea("1.3.1", 2)
const t13 = new TareaCompuesta("1.3", 3,[t132,t131])

console.log(`duracion total: ${t12.getDuracion()} minutos`)

export default {Tarea, TareaCompuesta, Proyecto};