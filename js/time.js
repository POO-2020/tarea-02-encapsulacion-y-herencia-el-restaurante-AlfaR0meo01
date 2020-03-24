"use strict";
export default class Time {
    constructor(hora, minutos) {
        this._hora = hora;
        this._minutos = minutos;
        this_.ampm = this._hora >= 12 ? 'pm' : 'am';
    }
    
    getFormato12() {
        this._hora = this._hora % 12;
        this._hora = this._hora ? this._hora : 12;
        return ` ${this._hora}:${this._minutos} ${this._ampm}`;
    }

    getFormato24() {
        return `${this._hora}:${this._minutos} ${this._ampm} `;
    }
}

/*var time = new Time(10, 50,'am');
var time2 = new Time(15,50,'pm');
console.log(`la hora es ${time.getFormato12()}`);
console.log(`la hora es ${time2.getFormato24()}`);*/