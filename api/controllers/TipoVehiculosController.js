/**
 * TipoVehiculosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const Utilidades = require('./UtilidadesController');

module.exports = {
    obtenerTipoVehiculos: async function(req, res){
        await TipoVehiculo.find({
            where: {}
        }).sort('id DESC').then(( tipoVehiculos )=>{
            if (!tipoVehiculos || tipoVehiculos.length === 0) {
                Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_TIPO_VEHICULOS, res);
            } else {
                Utilidades.respuestaRetorno(true, sails.constantes.TIPO_VEHICULOS_ENCONTRADOS, res, tipoVehiculos);
            }
        }).catch((err)=>{
            sails.log.debug(err);
            Utilidades.respuestaRetorno(false, sails.constantes.ERROR_HALLAR_TIPO_VEHICULOS, res);
        });
    },
    crearTipoVehiculo: async function(req, res) {
        let tipoVehiculos = req.allParams();
        console.log(tipoVehiculos);        
        await TipoVehiculo.create(tipoVehiculos).then(()=>{
            Utilidades.respuestaRetorno(true, sails.constantes.TIPO_VEHICULO_CREADO, res);
        }).catch((err)=>{
            sails.log.debug(err);
            Utilidades.respuestaRetorno(false, sails.constantes.ERROR_CREAR_TIPO_VEHICULO, res);
        });                
    },
};

