const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/* -- Llaves de encriptación para el mensaje

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

*/

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let indice = 0; indice < matrizCodigo.length; indice++){
        if(stringEncriptada.includes(matrizCodigo[indice][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[indice][0], matrizCodigo[indice][1])
        }
    }
    return stringEncriptada;
}

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let indice = 0; indice < matrizCodigo.length; indice++){
        if(stringDesencriptada.includes(matrizCodigo[indice][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[indice][1], matrizCodigo[indice][0])
        }
    }
    return stringDesencriptada;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
}

function btnCopiar(){
    let boton = document.getElementById("copiar");

    navigator.clipboard.writeText(mensaje.value);
    boton.textContent ="Copiado";
}