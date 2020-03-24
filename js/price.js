'use strict';
export default class Price{
    constructor(precio){
        this._precio = precio;//parseFloat(precio);/*toFixed(2)*/
        
    }
    getPrice(){
        return this._precio;
    }
}

