
function myf() {
    /* el div del lado izquierdo */
    var elem1 = document.getElementById('back1');

    /* el div del lado derecho */
    var elem2 = document.getElementById("back2"); 

    /* el tamaño del viewport horizontalmente */
    var inwidth = window.innerWidth;

    /* posicion del mouse horizontalmente */
    var x = event.clientX;

    /* porcentaje del mouse en la pantalla */
    var percent = (x * 100)/inwidth;

    /* total a tomar para opacidad */
    var opac = (15*inwidth)/100;

    /* valor minimo sobre el cual la opacidad sera 0 */
    var opacmin = (inwidth/2)-opac;

    /* si el mouse se encuentra en menos del 50% va a hacer el div de la 
    izquierda mas grande */
    if (x <= (inwidth/2)) {
        elem2.style.width = percent + "%";
        elem1.style.width = (100-percent) + "%";
        document.getElementById("maindiv").style.opacity = 0;
    }

    /* si el mouse se encuentra a mas del 50% va a hacer al div de la derecha
    mas grande */
    if (x >= (inwidth/2)+1){
        elem1.style.width = (100-percent) + "%";
        elem2.style.width = percent + "%";
        document.getElementById("maindiv").style.opacity = 0;
    }

    /* maneja la opacidad dentro del 15% menos del 50% del tamaño de la pantalla */
    if (x >= ((inwidth/2)-opac) && x <= inwidth/2){
        var fifperc = ((x - opacmin)*100)/opac;
        document.getElementById("maindiv").style.opacity = fifperc/100;
    }

    if (x >= inwidth/2 && x <= (inwidth/2)+opac) {
        var fifperc2 = (((x - inwidth/2)*100)/opac);
        document.getElementById("maindiv").style.opacity = (100-fifperc2)/100;
    }



    }   