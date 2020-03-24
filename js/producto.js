'use strict';

export default class Product{
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;//new Price(precio);     
    }
    getDescription(){
        return `${this._nombre} , ${this._precio.getPrice()}`;      
    }
}

