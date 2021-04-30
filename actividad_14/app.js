// Proceso 1: Comprar Casco, duración: 1 segundo
// Proceso 2: Comprar guantes, duración 2 segundos
// Proceso 3: Ir de paseo en bici: 8 segundos:

const comprarCasco = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Comprar Casco");
        }, 1000);
    });
}

const comprarGuantes = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Comprar Guantes");
        }, 2000);
    });
}

const pasear = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Ir de paseo en bici");
        }, 8000);
    });
}

const pasearBici = async () => {
    const casco = await comprarCasco();
    console.log(casco);
    const guantes = await comprarGuantes();
    console.log(guantes);
    const paseo = await pasear();
    console.log(paseo);
    return([casco, guantes, paseo]);
}

pasearBici().then(res => console.log(res));