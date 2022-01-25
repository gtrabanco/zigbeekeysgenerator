        
var keys = []

function generarLlaveZigbee() {
    keys = []
    let idtag=document.getElementById('keys')
    let secure=document.getElementById('secure').checked

    //idtag.innerHTML ="  network_key:\n";

    for (i = 0; i < 16; i++) {
        keys.push(enteroAleatorio(0, 255))
        //idtag.innerHTML +="\n    - " + llave;
    }

    ver_keys()
}

function ver_keys() {
    let secure=document.getElementById('secure')
    let idtag=document.getElementById('keys')

    if (secure.checked) {
        idtag.innerHTML = 'zigbee2mqtt_keys: ['
        idtag.innerHTML += keys.join(', ') + ']'
    } else {
        idtag.innerHTML = "  network_key:\n    - " + keys.join("\n    - ")
    }

    copiar_codigos()
}

function enteroAleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo
}

function copiar(str) {
    const el = document.createElement('textarea')
    el.value = str
    el.setAttribute('readonly', '');
    document.body.appendChild(el)
        .select()
        .execCommand('copy');
    document.removeChild(el);
}

function generar_mostrar_panid() {
    let panid=document.getElementById('panidCode');
    panid.innerHTML=enteroAleatorio(0, 65534);
}

window.addEventListener("load", function() {
    let secure=document.getElementById('secure')
    let btnGen=document.getElementById('enviar')
    let btnCopy=document.getElementById('copy')
    btnGen.addEventListener('click', () => generarLlaveZigbee())
    btnCopy.addEventListener('click', () => copiar(document.getElementById('keys').innerHTML))
    secure.addEventListener('click', () => ver_keys())

    let btnGenerarPanid = document.getElementById('generarPanid');
    let btnCopiaPanid = document.getElementById('copiaPanid');

    btnGenerarPanid.addEventListener('click', () => { generar_mostrar_panid(); copiar(document.getElementById('panidCode').innerHTML) });
    btnCopiaPanid.addEventListener('click', () => copiar(document.getElementById('panidCode').innerHTML))

    //Start
    generarLlaveZigbee()
    generar_mostrar_panid()
})