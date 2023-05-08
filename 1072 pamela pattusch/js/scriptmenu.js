function presion(x, y) {
    var fecha = new Date() // variable eje
    var dia = fecha.getDay() // variable apoyo

    var respuesta = document.getElementById('resultado')
    // getday empieza por domingo = 0
    switch (dia) {
        case 1:
            respuesta.innerHTML =
                'hoy LUNES cocido madrileño'
            break;
        case 2:
            respuesta.innerHTML =
                'hoy MARTES descanso'

            break;
        case 3:
            respuesta.innerHTML =
                'hoy MIERCOLES cocido montañes'

            break;
        case 4:
            respuesta.innerHTML =
                'hot JUEVES cocido gallego'

            break;
        case 5:
            respuesta.innerHTML =
                'hoy VIERNES cocido madrileño'

            break;
        case 6:
            respuesta.innerHTML =
                'hoy SABADO judiones'

            break;
        case 0:
            console.log('por el domingo')
            respuesta.innerHTML =
                'hoy DOMINGO paella'

            break;
        default:
            respuesta.innerHTML =
                'error de conexion'

            break;
    }
}