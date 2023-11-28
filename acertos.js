const resultado = document.querySelector("#resultado");
const numeroSorte = document.querySelector("#numeroSorte");
const enviar = document.querySelector(".enviar");
const msg = document.querySelectorAll(".msg");
const msg2 = document.querySelector("#msg2");


let resulJogo = [];
let numeroSort = [];
function validarCampo(e) {
    let inputValue = e.target.value;
    inputValue = inputValue.replace(/[^0-9-.,]/g, '');
    inputValue = inputValue.replace(/\.{2,}/g, ',');
    inputValue = inputValue.replace(/\./g, ',');
    e.target.value = inputValue;
};

function acertos(n1, n2) {
    return n1.filter(numero => n2.includes(numero));
}


function separar(numeros) {
    let numerosVirgula = numeros.replace(/(\d{2})/g, '$1,');

    numerosVirgula = numerosVirgula.replace(/,$/, '');

    return numerosVirgula;
}

function filtrador(array) {
    const transfNumInt = array[0].split(",").map(numero => parseInt(numero, 10));
    return transfNumInt
}


numeroSorte.addEventListener("input", validarCampo);
resultado.addEventListener("input", validarCampo);

enviar.addEventListener("click", (e) => {
    if (!resultado.value || !numeroSorte.value) {
        alert("NENHUM DOS CAMPOS PODEM ESTAR VAZIO");
    } else {
        e.preventDefault();
        resulJogo.push(separar(resultado.value));
        numeroSort.push(separar(numeroSorte.value));
        let numerosIguais = acertos(filtrador(resulJogo), filtrador(numeroSort));

        msg2.style.display = "block";
        msg2.textContent = `Você acertou ${numerosIguais.length} números`;

        console.log(numerosIguais.length);

        numeroSorte.value = "";
        resultado.value = "";
        resulJogo = [];
        numeroSort = [];
    }
});










