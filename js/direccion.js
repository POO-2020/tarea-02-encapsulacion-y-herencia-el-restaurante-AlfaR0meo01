'use strict';

export default class Direccion{
    constructor(calle, num_exterior, num_interior, colonia, codigo_postal, ciudad, municipio){
        this._calle = calle;
        this._num_exterior = num_exterior;
        this._num_interior = num_interior;
        this._colonia = colonia;
        this._codigo_postal = codigo_postal;
        this._ciudad = ciudad;
        this._municipio = municipio;
        
    }
    getFormatoCorto(){
        return `Direccion: ${this._calle}, numero: ${this._num_exterior},`;
    }
    getFormatLargo(){
        return `Direccion: ${this._calle}, numero exterior: ${this._num_exterior}, numero interior: ${this._num_interior},
         colonia: ${this._colonia}, CP: ${this._codigo_postal}, ciudad: ${this._ciudad}, municipio: ${this._municipio}`;
    }
}