'use strict';
export default class elementPedido{
    constructor(producto, cantidad){
        this._producto = producto;
        this._cantidad = cantidad;     
    }
    getDescripcion(){
        return `${this._producto.getDescription()}, cantidad: ${this._cantidad}`;
    }
}
