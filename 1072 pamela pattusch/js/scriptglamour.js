var contadorA = 0;
var contadorB = 0;
var linea1campoA =0;
var linea1campoB =0;
var linea2campoA =0;
var linea2campoB =0;
var linea3campoA =0;
var linea3campoB =0;
// 1 LINEA
function botonA1(x, y) {
  
    linea1campoA = 1;
    contadorA = (++contadorA)
    document.getElementById('visto1').innerHTML = '✔';
    linea1()
}

function botonB1(x, y) {
    linea1campoB = 1;
    contadorB = (++contadorB)
    document.getElementById('visto2').innerHTML = '✔';
    linea1()
}
function linea1(x,y) {
    if (linea1campoA == linea1campoB) {
        document.getElementById('glamresultado').innerHTML = 'NO PUEDE ELEGIR LAS 2 CASILLAS A LA VEZ, USE LA TECLA BORRAR'
            
    }
    
}
// 2 LINEA
function botonA2(x, y) {
  
    linea2campoA = 1;
    contadorA = (++contadorA)
    document.getElementById('visto3').innerHTML = '✔';
    
    linea2()
}

function botonB2(x, y) {
    linea2campoB = 1;
    contadorB = (++contadorB)
    document.getElementById('visto4').innerHTML = '✔';
    linea2()
}
function linea2(x,y) {
    if (linea2campoA == linea2campoB) {
        document.getElementById('glamresultado').innerHTML = 'NO PUEDE ELEGIR LAS 2 CASILLAS A LA VEZ, USE LA TECLA BORRAR'
  
    }
    
}
// linea 3
function botonA3(x, y) {
  
    linea3campoA = 1;
    contadorA = (++contadorA)
    document.getElementById('visto5').innerHTML = '✔';
    
    linea3()
}

function botonB3(x, y) {
    linea3campoB = 1;
    contadorB = (++contadorB)
    document.getElementById('visto6').innerHTML = '✔';
    linea3()
}
function linea3(x,y) {
    if (linea3campoA == linea3campoB) {
        document.getElementById('glamresultado').innerHTML = 'NO PUEDE ELEGIR LAS 2 CASILLAS A LA VEZ, USE LA TECLA BORRAR'
       
    }
    
}

function test(x, y) {

    if (contadorA == 3) {

        document.getElementById('glamresultado').innerHTML = 'GLAMOUR A TOPE,TRABAJA CON NOSOTROS'
    }
    else {

        if (contadorB > contadorA) {

            document.getElementById('glamresultado').innerHTML = 'NO TIENES GLAMOUR NINGUNO, APUNTATE A LA ACADEMIA'
        }
        else {
            document.getElementById('glamresultado').innerHTML = 'MEJORARAS CON NOSOTROS, APUNTATE A LA ACADEMIA'
        }

    }
}
function borrartest(x, y) {
    contadorA = 0;
    contadorB = 0;
    linea1campoA =0;
    linea1campoB =0;
    linea2campoA =0;
    linea2campoB =0;
    linea3campoA =0;
    linea3campoB =0;

    document.getElementById('glamresultado').innerHTML = ''
    document.getElementById('visto1').innerHTML = '';
    document.getElementById('visto2').innerHTML = '';
    document.getElementById('visto3').innerHTML = '';
    document.getElementById('visto4').innerHTML = '';
    document.getElementById('visto5').innerHTML = '';
    document.getElementById('visto6').innerHTML = '';
}
