//1º Declaracion de variables
var contador = 0
var prenda1 = 179.99
//2 Variables secundaria
var total = 0;

function agregar() {
    sumaClick(++contador)//++ operador asignacion 

    venta();

}

function venta(x, y) {
    var total = (contador * prenda1)

    document.getElementById('resultado').innerHTML = 'El precio es: ' + total + '€'

}

function sumaClick(contador) {
    document.getElementById('nºClicks').innerHTML = (contador)
}


function borrar() {
    contador = 0;
    total = 0;

    document.getElementById('resultado').innerHTML = 'total: ' + contador
    document.getElementById('nºClicks').innerHTML = total;

}
function cambioPagina() {
    document.getElementById('boton').href = 'ventaCurso.html'
}