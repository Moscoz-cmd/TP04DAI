function obtenerHoraActual()
{
    const Ahora= new Date()
    const hh = String(Ahora.getHours()).padStart(2, '0');
    const mm = String(Ahora.getMinutes()).padStart(2,'0');
    const ss = String(Ahora.getSeconds()).padStart(2,'0');

    return `${hh}:${mm}:${ss}`;

}
export default obtenerHoraActual;