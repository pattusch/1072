var combo = 0;
var cafe = 0;
var cruasan = 0;
var zumo = 0;
var cantidad = 0;
var opcion = 0;
var totalcombo = 0;
var totalcafe = 0;
var totalcruasan = 0;
var totalzumo = 0;
var total = 0;


function pedidocafe(x, y) {
    opcion = parseInt(prompt('Introduzca numero elegido ① , ② , ③ , ④'));
    if (opcion < 1 || opcion > 4) { // que ponga opcion correcta
        document.getElementById('caferesultado').innerHTML = ' NO EXISTE ESA OPCION,VUELVA A INTENTARLO';
        opcion = 0

    } else {
        document.getElementById('caferesultado').innerHTML = ' ';
        cantidad = parseInt(prompt('introduzca CUANTOS quiere de la OPCION' + ' ' + opcion));
        document.getElementById('caferesultado').innerHTML = 'pulse nuevamente PEDIDO para seguir añadiendo';


        switch (opcion) {
            case 1:
                if (combo != 0) { // si es distinto a 0 el nº de combos, osea ya lo han pedido
                    combo = (combo + cantidad); // se le suma el nuevo pedido a lo que ya tenian
                } else {
                    combo = (cantidad); // sino se le asigna su 1ª cantidad de
                }

                break;
            case 2:
                if (cafe != 0) {
                    cafe = (cafe + cantidad);
                } else {
                    cafe = (cantidad);
                }


                break;
            case 3:
                if (cruasan != 0) {
                    cruasan = (cruasan + cantidad);
                } else {
                    cruasan = (cantidad);
                }


                break;
            case 4:
                if (zumo != 0) {
                    zumo = (zumo + cantidad);
                } else {
                    zumo = (cantidad);
                }


                break;



            default:
                swal('opcion no comtemplada, del 1 al 4');
                break;
        }
    }

}
function totalfactura(x, y) {
    console.log('paso por factura')
    totalcombo = (combo * 2.99);
    totalcafe = (cafe * 1.80);
    totalcruasan = (cruasan * 2.10);
    totalzumo = (zumo * 3.40);
    total = (totalcombo + totalcafe + totalcruasan + totalzumo);

    swal('nº combos_____:' + combo + ' ' + '*' + ' ' + '2,99 € = ' + totalcombo.toFixed(2) + '€' + '\n' +
         'nº cafes______:' + cafe + ' ' + '*' + ' ' + '1,80 € = ' + totalcafe.toFixed(2) + '€' + '\n' +
         'nº croissant__:' + cruasan + ' ' + '*' + ' ' + '2,10 € = ' + totalcruasan.toFixed(2) + '€' + '\n' +
         'nº zumos______:' + zumo + ' ' + '*' + ' ' + '3,40 € = ' + totalzumo.toFixed(2) + '€' + '\n' +
         '------------------------' + '\n' +
        'total factura' + ' ' + total.toFixed(2) + ' ' + '€');

    // borrado de todo
    document.getElementById('caferesultado').innerHTML = ' ';
    borrarcafe();

}
function borrarcafe(x, y) {
    document.getElementById('caferesultado').innerHTML = ' ';
    combo = 0;
    cafe = 0;
    cruasan = 0;
    zumo = 0;
    cantidad = 0;
    opcion = 0;
    totalcombo = 0;
    totalcafe = 0;
    totalcruasan = 0;
    totalzumo = 0;
    total = 0;
}