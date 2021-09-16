export class Transferencias
{
    transferenciaId : string;
    cuentaOrigen : number;
    cuentaDestino : number;
    monto : number;
    fecha : string;
    hora : string;

    constructor(transferenciaId, cuentaOrigen, cuentaDestino, monto, fecha, hora)
    {
        this.transferenciaId = transferenciaId;
        this.cuentaOrigen = cuentaOrigen;
        this.cuentaDestino = cuentaDestino;
        this.monto = monto;
        this.fecha = fecha;
        this.hora = hora;
    }
}