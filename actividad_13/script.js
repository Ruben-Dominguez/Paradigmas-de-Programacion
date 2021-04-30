
const comprarCascoPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Comprar Casco");
    }, 1000);
});

const comprarGuantesPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Comprar Guantes");
    }, 2000);
});

const paseoPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Ir de paseo en bici");
    }, 8000);
});

const empezarBicicleta = () => {
    comprarCascoPromise
        .then((tarea1)=>{
            console.log(tarea1);
            return comprarGuantesPromise;
        })
        .then((tarea2)=>{
            console.log(tarea2);
            return paseoPromise;
        })
        .then((tarea3)=>{
            console.log(tarea3);
        })
        .catch(()=>{
            console.error("Se ha producido un error.")
        })
        .finally(()=>{
            console.log("Se han finalizado todas las tareas");
        })
}

empezarBicicleta();


// Proceso 1: Comprar Casco, duración: 1 segundo
// Proceso 2: Comprar guantes, duración 2 segundos
// Proceso 3: Ir de paseo en bici: 8 segundos: