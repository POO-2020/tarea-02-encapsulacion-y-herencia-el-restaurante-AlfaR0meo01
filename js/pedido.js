'use strict';
import Price from './price.js';
export default class Pedidos{
    constructor(fecha, hora, cliente){
        this._fecha = fecha;
        this._hora = hora;
        this._cliente = cliente;
        this._elementpedido = [];
    }
    getNumElementos(){
        return `${this._elementpedido.length}`;
    }
    getResumen(){
        return `${this._fecha.getFecha()}  ${this._hora.getFormato12()} ${this.getNumElementos()} elementos con ${this.getProductos()} productos total: ${this.getCostoTotal()}`;
    }
    getProductos(){
        var product = 0;
        this._elementpedido.forEach(element => {
            product += element.cantidad
        });
        return product;
    }
    getCostoTotal(){
        var costo = 0;
        this._elementpedido.forEach(elemento => {
            costo += parseFloat(elemento.cantidad) * parseFloat(elemento.producto.precio.precio);     
        });
        return new Price(costo.toFixed(2)).getPrice();
    }
    agregarElementos(elemento){
        return this._elementpedido.push(elemento);
    }
    listarElemetos(){
        this._elementpedido.forEach(elemento => {
            console.log(elemento.getDescripcion());
               
        });
    }
}
/*var hola = new Pedidos(new Fecha(11,2,2006),new Time(11,56));
hola.listarElemetos();*/
