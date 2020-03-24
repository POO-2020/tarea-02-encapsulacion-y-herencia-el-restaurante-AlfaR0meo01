"use strict";
export default class Fecha {
    constructor(dia, mes, ano) {
        this._fecha = new Date(ano,mes,dia);
        this._diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        this._meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    }
    getMscos() {
        return new Date() - this._fecha;
    }

    getAno = _ => Math.trunc(this.getMscos() / (31536000000)).toString()+ ' años';

    getMeses = _ => Math.trunc(this.getMscos() / (2628000000)).toString()+ ' meses';
    
    getSemanas = _ => Math.trunc(this.getMscos() / (604800000)).toString()+ ' semanas';
    
    getDias = _ => Math.trunc(this.getMscos() / (86400000)).toString()+ ' semanas';

    getFecha() {
        return `${this._fecha.getDate()}/${this._fecha.getMonth() + 1}/${this._fecha.getFullYear()}`;
    }
    getDiaFecha() {
        return this._diasSemana[this._fecha.getDay()];
    }
}

