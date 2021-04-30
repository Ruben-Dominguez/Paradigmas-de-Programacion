
const url = 'https://jsonplaceholder.typicode.com/photos';
const lista = document.getElementById("lista");

// fetch(url)
//     .then(response => response.json())
//     .then(fotos => {
//         fotos.map(foto => {
//             let li = document.createElement("li");
//             li.innerHTML = `<a href="detalle.html?id=${foto.id}">${foto.id}</a> ${foto.title}`;
//             lista.appendChild(li);
//         })

//     })
//     .catch(error => {
//         document.getElementById("error").innerHTML = error.message;
//         console.error(error);
//     })
//     .finally(() => {
//         document.getElementById("cargando").src = "";
//         document.getElementById("cargando").alt = "";
//         console.log("Proceso terminado");
//     })

const obtenerFotos = async () => {
    const response = await fetch(url);
    const fotos = await response.json();
    return fotos;
}

obtenerFotos()
    .then(fotos => {
        fotos.map(foto => {
            let li = document.createElement("li");
            li.innerHTML = `<a href="detalle.html?id=${foto.id}">${foto.id}</a> ${foto.title}`;
            lista.appendChild(li);
        })
    })
    .catch(error => {
        document.getElementById("error").innerHTML = error.message;
        console.error(error);
    })
    .finally(() => {
        document.getElementById("cargando").src = "";
        document.getElementById("cargando").alt = "";
        console.log("Proceso terminado");
    })