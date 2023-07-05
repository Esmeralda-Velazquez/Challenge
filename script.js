//logica para la encriptacion y desencriptacion de palabras :)
const formControl = document.getElementById('form-control');
const resultContainer = document.getElementById('result-container');
const encriptarButton = document.getElementById('btn-primary');
const desencriptarButton = document.getElementById('btn-secondary');
const limpiarButton = document.getElementById('btn-limpiar');
const copiarButton = document.createElement('button');
const copiarIcon = document.createElement('span');
var alerta = document.createElement('div');

function encriptarTexto() {
    const textoParaEncriptar = formControl.value;
    const textoEncriptado = textoParaEncriptar
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    resultContainer.textContent = textoEncriptado;
    resultContainer.appendChild(copiarButton);
}

encriptarButton.addEventListener('click', encriptarTexto);

function desencriptarTexto() {
    const textoParaDesencriptar = formControl.value;
    const textoDesencriptado = textoParaDesencriptar
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    resultContainer.textContent = textoDesencriptado;
    resultContainer.appendChild(copiarButton);
}

desencriptarButton.addEventListener('click', desencriptarTexto);

limpiarButton.addEventListener('click', function () {
    resultContainer.textContent = '';
    formControl.value = '';
});



function copiarTexto() {
    const textoCopiado = resultContainer.textContent;
    navigator.clipboard.writeText(textoCopiado)
        .then(() => {
            alerta.className = 'alert alert-primary';
            alerta.setAttribute('role', 'alert');
            alerta.textContent = 'Texto copiado al portapapeles: ' + textoCopiado;
            alerta.style.position = 'fixed';
            alerta.style.bottom = '10px';
            alerta.style.left = '35%';
            
            document.body.appendChild(alerta);
            
            setTimeout(function() {
              alerta.remove();
            }, 2000);
        })
        .catch((error) => {
            console.error('Error al copiar el texto: ' + error);
        });
}
copiarIcon.classList.add('custom-icon');
copiarButton.appendChild(copiarIcon);
copiarButton.classList.add('btn', 'btn-sm', 'float-end', 'me-3');
copiarButton.addEventListener('click', copiarTexto);