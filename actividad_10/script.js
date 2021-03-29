let lista = document.getElementById("lista");

// let valores = ['Juan', 'Daniel', 'Raul', 'Hugo', 'Dali'];

let valores = [];

const mostrarValores = () => valores.map(valor => {
    let componenteLi = document.createElement("li");
    componenteLi.innerHTML = valor;
    lista.appendChild(componenteLi);
})

const agregarValor = () => {
    let valor = document.getElementById("valor");
    lista.innerHTML = "";
    valores.push(valor.value);
    mostrarValores();
}

const limpiarValores = () => {
    lista.innerHTML = "";
    valores = [];
}

mostrarValores();