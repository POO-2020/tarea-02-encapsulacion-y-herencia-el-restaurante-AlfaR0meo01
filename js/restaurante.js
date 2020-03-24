'use strict';
import Direccion from './direccion.js';
export default class Restaurante {
    constructor({
        nombre,
        telefono,
        direccion
    }) {
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
        this._productos = [];
        this._pedidos = [];
    }
    registrarProductos(producto) {
        this._productos.push(producto);
    }
    listrarProductos() {
        this._productos.forEach(producto => {
            console.log(producto.getDescripcion());
        });
    }
    registrarPedidos(pedido) {
        this._pedidos.forEach(ped => {
            if (ped._numeroPedido === pedido._numeroPedido) {
                return false;
            }
        });
        this._pedidos.push(pedido);
        return true;
    }
    buscarPedido(pedido) {
        var resultado = null;
        this._pedidos.forEach(ped => {
            if (ped._numeroPedido === pedido._numeroPedido) {
                resultado = ped;
            }
        });
        return resultado;
    }
    eliminarPedido(pedido) {
        var indice = -1;
        this._pedidos.forEach((ped, i) => {
            if (pedido._numeroPedido === ped._numeroPedido) {
                indice = i;
            }
        });
        if (indice < 0) {
            return false;
        }
        this._pedidos.splice(indice, 1);
        return true;
    }
    actualizarPedido(pedido, nuevoPedido) {
        var indice = -1;
        this._pedidos.forEach((ped, i) => {
            if (pedido._numeroPedido === ped._numeroPedido) {
                indice = i;
            }
        });
        if (indice < 0) {
            return false;
        }
        this._pedidos.splice(indice, 1, nuevoPedido);
        return true;
    }
    listarPedidos() {
        this._pedidos.forEach((pedido) => {
            console.log(pedido.getResumen());
        });
    }

}