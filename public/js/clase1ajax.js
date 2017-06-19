ASINCRONO = {};
ASINCRONO.consultar = function( parametrourl ) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", parametrourl );
    xhr.onreadystatechange = function( ) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var panelsito = document.querySelector('#panel_mensajes');
                panelsito.innerHTML = xhr.responseText;
            }else {
                var panelsito = document.querySelector('#panel_mensajes');
                panelsito.innerHTML = "Error : " + xhr.status + ' : ' + xhr.statusText;
            }
        }
    };
    xhr.send();
};

ASINCRONO.borrar = function() {
    var panelsito = document.querySelector('#panel_mensajes');
    panelsito.innerHTML = "";
};




  