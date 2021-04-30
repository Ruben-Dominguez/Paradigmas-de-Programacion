const todo = (tarea, duracion, callback) => {
    setTimeout(()=>{
         callback(tarea)
    }, duracion)
}

todo("Levantarse",5000, (tarea) => {
    console.log(`Realizando la tarea ${tarea}`)
    todo("Tender la cama",5000, (tarea) => {
        console.log(`Realizando la tarea ${tarea}`)
        todo("Bañarse",3000, (tarea) => {
            console.log(`Realizando la tarea ${tarea}`)
            todo("clase de paradigmas ",3000, (tarea) => {
                console.log(`Realizando la tarea ${tarea}`)
                todo("Desayunar ",8000, (tarea) => {
                    console.log(`Realizando la tarea ${tarea}`)
                    todo("Jugar ",10000, (tarea) => {
                        console.log(`Realizando la tarea ${tarea}`)
                    })
                })
            })
        })
    })
})

/*
Actividad 1: Levantarse. Duración: 5 segundos
Actividad 2: tender la cama. Duración: 3 segundos
Actividad 3: Bañarse. Duración: 3 segundos
Actividad 5: Tomar clase de paradigmas. Duración: 5 segundos
Actividad 6: Desayunar: Duración: 8 segundos
Actividad 6: Jugar videojuegos: Duración: 10 segundos
*/