
function btn() {
    console.log("Button pressed");

}

function playPause() {
    var paused = document.getElementById("audiosrc");
    if (paused.paused) {
        document.getElementById("playPause").innerHTML = "<i class='fas fa-volume-up'></i>";
        paused.play()
    } else {
        document.getElementById("playPause").innerHTML = "<i class='fas fa-volume-mute'></i>";
        paused.pause()
    }
}

function buttonPlay() {
    document.getElementById("audiobutton").play();
}

function audiovol(volu) {
    var media = document.getElementById("audiosrc");
    const playPromise = media.play();
    if (playPromise !== null) {
        playPromise.catch(() => { media.play(); })
    }

    document.getElementById("audiosrc").volume = volu;
}

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
    var percent = (x * 100) / inwidth;

    /* total a tomar para opacidad */
    var opac = (15 * inwidth) / 100;

    /* valor minimo sobre el cual la opacidad sera 0 */
    var opacmin = (inwidth / 2) - opac;

    /* Si el mouse se mueve hacia la izquierda todo se mueve hacia la derecha */

    if (x <= (inwidth / 2)) {
        elem1.style.transform = "translateX(" + (-percent) + "%)";
        elem2.style.transform = "translateX(" + (-percent) + "%)";
        //elem1.style.transform = "translateX(" + (100-percent) + "%)";
        document.getElementById("maindiv").style.opacity = 0;
    }

    /* Si el mouse se mueve hacia la derecha todo se empuja hacia la izquierda */

    if (x >= (inwidth / 2) + 1) {
        elem1.style.transform = "translateX(" + (-percent) + "%)";
        elem2.style.transform = "translateX(" + (-percent) + "%)";
        document.getElementById("maindiv").style.opacity = 0;
    }

    /* agrega la animacion de entrada al div con info sobre arte y quita opacidad a la imagen de fondo */
    if (x >= ((inwidth / 2) + opac)) {
        document.getElementById("back2Text").classList.add("animated", "bounceInUp")
        document.getElementById("back2Text").style.display = "block";
        document.getElementById("maindiv").style.display = "none";
        document.getElementById("back2Text").classList.remove("bounceOutDown")
        document.getElementById("back2Text").style.opacity = "100%";
    }

    /* agrega la animacion de salida al div con info sobre arte y agrega opacidad al 100% para esconderlo */
    if (x <= ((inwidth / 2) + opac)) {
        document.getElementById("back2Text").classList.add("animated", "bounceOutDown")
        document.getElementById("back2Text").style.display = "none";
        document.getElementById("back2Text").classList.remove("bounceInUp")
        document.getElementById("back2Text").style.opacity = "0%";

    }

    if (x <= ((inwidth / 2) - opac)) {
        document.getElementById("back1Text").classList.add("animated", "bounceInUp")
        document.getElementById("back1Text").style.display = "block";
        document.getElementById("maindiv").style.display = "none";
        document.getElementById("back1Text").classList.remove("bounceOutDown")
        document.getElementById("back1Text").style.opacity = "100%";
    }

    if (x >= ((inwidth / 2) - opac)) {
        document.getElementById("back1Text").classList.add("animated", "bounceOutDown")
        document.getElementById("back1Text").style.display = "none";
        document.getElementById("back1Text").classList.remove("bounceInUp")
        document.getElementById("back1Text").style.opacity = "0%";
    }


    /* maneja la opacidad dentro del 15% menos del 50% del tamaño de la pantalla */
    if (x >= ((inwidth / 2) - opac) && x <= inwidth / 2) {
        document.getElementById("maindiv").style.display = "flex";
        var fifperc = ((x - opacmin) * 100) / opac;
        document.getElementById("maindiv").style.opacity = fifperc / 100;
    }


    if (x >= inwidth / 2 && x <= (inwidth / 2) + opac) {
        document.getElementById("maindiv").style.display = "flex";
        var fifperc2 = (((x - inwidth / 2) * 100) / opac);
        document.getElementById("maindiv").style.opacity = (100 - fifperc2) / 100;
    }



}


function rightDiv(){
    document.getElementById('back1').style.transform = 'translateX(0%)';
    document.getElementById('back2').style.transform = 'translateX(0%)';
    document.getElementById('maindiv').style.transform = 'translateY(-100%)';
    document.getElementById('maindiv').style.opacity = 0;

    document.getElementById('mainmenu').style.transform = 'translateY(0)';
    document.getElementById('left').style.transform = 'translateX(-100%)';
    document.getElementById('right').style.transform = 'translateX(0%)';
    document.getElementById('mainbutton').style.transform = 'translateX(0%)';
    
}

function leftDiv(){
    document.getElementById('back1').style.transform = 'translateX(-100%)';
    document.getElementById('back2').style.transform = 'translateX(-100%)';
    document.getElementById('maindiv').style.transform = 'translateY(-100%)';
    document.getElementById('maindiv').style.opacity = 0;

    document.getElementById('mainmenu').style.transform = 'translateY(0%)';
    document.getElementById('mainbutton').style.transform = 'translateX(5%)';
    document.getElementById('left').style.transform = 'translateX(0%)';
    document.getElementById('right').style.transform = 'translateX(110%)';
}

function mainDiv(){
    document.getElementById('back1').style.transform = 'translateX(-50%)';
    document.getElementById('back2').style.transform = 'translateX(-50%)';
    document.getElementById('maindiv').style.transform = 'translateY(0%)';
    document.getElementById('maindiv').style.opacity = 1;


    document.getElementById('mainmenu').style.transform = 'translateY(100%)';
    document.getElementById('left').style.transform = 'translateX(0%)';
    document.getElementById('right').style.transform = 'translateX(0%)';


}