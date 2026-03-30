export function obtenerHoraActual()
{
    const Ahora= new Date()
    const hh = String(Ahora.getHours()).padStart(2, '0');
    const mm = String(Ahora.getMinutes()).padStart(2,'0');
    const ss = String(Ahora.getSeconds()).padStart(2,'0');

    return `${hh}:${mm}:${ss}`;

}
export function obtenerFechaCompleta() {
    const ahora = new Date();

    const dias = [
        "domingo","lunes","martes","miércoles","jueves","viernes","sábado"
    ];
    const meses = [
        "enero","febrero","marzo","abril","mayo","junio",
        "julio","agosto","septiembre","octubre","noviembre","diciembre"
    ];

    const diaSemana = dias[ahora.getDay()];
    const dia = ahora.getDate();
    const mes = meses[ahora.getMonth()];
    const año = ahora.getFullYear();

    const hh = String(ahora.getHours()).padStart(2, '0');
    const mm = String(ahora.getMinutes()).padStart(2, '0');
    const ss = String(ahora.getSeconds()).padStart(2, '0');

    return `${diaSemana} ${dia} de ${mes} de ${año}, ${hh}:${mm}:${ss}`;
}


//por alguna razon funciona el export function y no el export default