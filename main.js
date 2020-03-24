'use strict';
import Time from "./js/time.js";
import Fecha from "./js/fecha.js";
import Price from './js/price.js';
import Direccion from "./js/direccion.js";
import ClienteFrecuente from "./js/cliente_frecuente.js";
import Cliente from "./js/cliente.js";
import Product from "./js/producto.js";
import elementPedido from "./js/elementpedido.js";
import Pedido from "./js/pedido.js";
import Restaurante from "./js/restaurante.js";

var direccion = new Direccion('mercedes zamora', 834, undefined, 'el diezmo', '28010', 'colima', 'colima');
var producto1 = new Product("pizza de peperono", new Price(50));
var producto2 = new Product("Pizza de carnes frias", new Price(100));
var producto3 = new Product("Pizza con piña", new Price(10));
var elemento1 = new elementPedido(producto1, 2);
var elemento2 = new elementPedido(producto2, 4);
var elemento3 = new elementPedido(producto3, 5);
var pedido1 = new Pedido(dataPedido1);
var pedido2 = new Pedido(dataPedido2);
var pedido3 = new Pedido(dataPedido3);
pedido1.agregarElementos(elemento1);
pedido1.agregarElementos(elemento2)
pedido2.agregarElementos(elemento2);
pedido3.agregarElementos(elemento3);


var dataClienteF = {
    nombre: "Pepe",
    direccion: new Direccion("Medio falsa", 420, 0, "Peligrosa", 28000, "Colima", "Colima"),
    telefono: 3121683475,
    numeroCliente: 254785,
    fechaRegistro: new Fecha(20, 1, 2020)
};
var dataPedido1 = {
    fecha: new Fecha(19, 2, 2020),
    hora: new Time(22, 10),
    cliente: new Cliente("Elmo", new Direccion("Falsa", 123, 0, "Malavista", 28984, "Colima", "Colima"), 3123027485),
    numeroPedido: 1
};
var dataPedido2 = {
    fecha: new Fecha(19, 2, 2020),
    hora: new Time(22, 10),
    cliente: new Cliente("Elmer", new Direccion("Falsa", 124, 0, "Malavista", 28984, "Colima", "Colima"), 3123127485),
    numeroPedido: 2
};
var dataPedido3 = {
    fecha: new Fecha(19, 2, 2020),
    hora: new Time(22, 10),
    cliente: new Cliente("Elza", new Direccion("Falsa", 125, 0, "Malavista", 28984, "Colima", "Colima"), 3123227485),
    numeroPedido: 3
};

class Main {
    constructor() {
        this.restaurante = new Restaurante('doña bacteria', 3121775682, direccion);
    }
    registrarPedidos() {
        this.restaurante.registrarPedidos(pedido1);
        this.restaurante.registrarPedidos(pedido2);
        this.restaurante.listarPedidos();
    }
    registrarProductos() {

        this.restaurante.registrarProductos(producto1);
        this.restaurante.registrarProductos(producto2);
        this.restaurante.registrarProductos(producto3);
        this.restaurante.listrarProductos();
    }
    testRestaurante() {
        console.log(this.restaurante.actualizarPedido(pedido2, pedido3));
        this.restaurante.listarPedidos();
        var cf = new ClienteFrecuente(dataClienteF);
        console.log(cf.getPerfil());
    }
}
var app = new Main();
app.registrarPedidos();
app.registrarProductos();
app.testRestaurante();