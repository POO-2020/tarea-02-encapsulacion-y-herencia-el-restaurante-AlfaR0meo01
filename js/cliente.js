"use strict";

export default class Cliente{
    constructor (nombre,direccion,telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    getPerfil(){
        return `${this._nombre}, ${this.direccion.getFormatoCorto()} ${this._telefono}`;
    }
}



