function generarCadenaAleatoria() {
    const codigo = document.getElementById('codigo');

    var caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
    var cadena = "";
    for (let i = 0; i < 20; i++) {
        if (i % 4 == 0 && i != 0) {
            cadena += '-';
        }
        cadena += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    codigo.innerHTML = cadena;
    navigator.clipboard.writeText(cadena);

    // De forma de notificiacion en la parte superiror de la pantalla indica que se ha copiado el codigo
    var notificacion = document.createElement('div');
    notificacion.innerHTML = '<i class="fas fa-check"></i><p class="color">Se ha copiado el código en el portapapeles</p>';
    notificacion.classList.add('notificacion');
    document.body.appendChild(notificacion);
    setTimeout(() => {
        notificacion.remove();
    }, 3000);
}

init();