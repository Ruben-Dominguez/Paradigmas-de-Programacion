
const voltear = () => {
    let normal = document.getElementById("texto").value;

    let volteado = normal.split("").reverse().join("");

    document.getElementById("mostrar").innerHTML = volteado;
}