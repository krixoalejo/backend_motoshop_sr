/**
 * VehiculosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Utilidades = require('./UtilidadesController');
const UtilidadesVehiculos = require('./UtilidadesVehiculosController');
const UtilidadesUsuarios = require('./UtilidadesUsuariosController');

module.exports = {
    obtenerVehiculos: async function (req, res) {
        try {
            let vehiculos = await Vehiculo.find({ where: {} }).sort('id DESC');
            if (!vehiculos || vehiculos.length === 0) {
                Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_VEHICULOS, res);
            } else {
                for (let i = 0; i < vehiculos.length; i++) {
                    let usuario = await UtilidadesUsuarios.existeId(vehiculos[i].usuario);
                    vehiculos[i].usuario = usuario[0].primerNombre + ' ' + usuario[0].primerApellido;
                    vehiculos[i].estado = await Utilidades.obtenerEstado(vehiculos[i].estado);
                }
                Utilidades.respuestaRetorno(true, sails.constantes.VEHICULOS_ENCONTRADOS, res, vehiculos);
            }
        } catch (error) {
            sails.log.debug(error);
            Utilidades.respuestaRetorno(false, sails.constantes.ERROR_HALLAR_VEHICULOS, res);
        }
    },
    obtenerVehiculoPorId: async function (req, res) {
        let vehiculoInfo = req.allParams();
        try {
            let vehiculo = await Vehiculo.find({
                where: { id: vehiculoInfo.id }
            });
            if (!vehiculo || vehiculo.length === 0) {
                Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_VEHICULO, res);
            } else {
                let usuario = await UtilidadesUsuarios.existeId(vehiculo.usuario);
                vehiculo[0].usuario = usuario[0].identificacion;
                Utilidades.respuestaRetorno(true, sails.constantes.VEHICULO_ENCONTRADO, res, vehiculo);
            }
        } catch (error) {
            sails.log.debug(err);
            Utilidades.respuestaRetorno(false, sails.constantes.ERROR_HALLAR_VEHICULO, res);
        }
    },
    crearVehiculo: async function (req, res) {
        let vehiculoInfo = req.allParams();
        if (vehiculoInfo.usuario) {
            let usuarioInfo = await UtilidadesUsuarios.existeIdentificacion(vehiculoInfo.usuario);
            if (usuarioInfo.length > 0) {
                let vehiculo = {
                    placa: vehiculoInfo.placa,
                    marca: vehiculoInfo.marca,
                    linea: vehiculoInfo.linea,
                    modelo: vehiculoInfo.modelo,
                    cilindraje: vehiculoInfo.cilindraje,
                    color: vehiculoInfo.color,
                    usuario: usuarioInfo[0].id,
                    seguro: 0,
                    estado: sails.estados.ACTIVO
                }
                await Vehiculo.create(vehiculo).then(() => {
                    Utilidades.respuestaRetorno(true, sails.constantes.VEHICULO_CREADO, res);
                }).catch((err) => {
                    sails.log.debug(err);
                    Utilidades.respuestaRetorno(false, sails.constantes.ERROR_CREAR_VEHICULO, res);
                });
            } else {
                Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_USUARIO_IDENTIFICACION, res);
            }
        } else {
            Utilidades.respuestaRetorno(false, sails.constantes.NO_INGRESO_IDENTIFICACION, res);
        }
    },
    actualizarVehiculo: async function (req, res) {
        let vehiculoInfo = req.allParams();
        let vehiculoExistente = await UtilidadesVehiculos.obtenerVehiculoPorId(vehiculoInfo.id);
        if (vehiculoExistente.length > 0) {
            let vehiculo = {
                placa: vehiculoInfo.placa,
                marca: vehiculoInfo.marca,
                linea: vehiculoInfo.linea,
                modelo: vehiculoInfo.modelo,
                cilindraje: vehiculoInfo.cilindraje,
                color: vehiculoInfo.color,
            }
            await Vehiculo.update(vehiculoExistente[0].id, vehiculo).then(() => {
                Utilidades.respuestaRetorno(true, sails.constantes.VEHICULO_ACTUALIZADO, res);
            }).catch((err) => {
                sails.log.debug(err);
                Utilidades.respuestaRetorno(false, sails.constantes.ERROR_ACTUALIZAR_VEHICULO, res);
            });
        } else {
            Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_VEHICULO, res);
        }
    },
    eliminarVehiculo: async function (req, res) {
        let vehiculoInfo = req.allParams();
        let vehiculoExistente = await UtilidadesVehiculos.obtenerVehiculoPorId(vehiculoInfo.idVehiculo);
        if (vehiculoExistente.length > 0) {
            let vehiculo = {
                estado: false
            }
            await Vehiculo.update(vehiculoExistente[0].id, vehiculo).then(() => {
                Utilidades.respuestaRetorno(true, sails.constantes.VEHICULO_ELIMINADO, res);
            }).catch((err) => {
                sails.log.debug(err);
                Utilidades.respuestaRetorno(false, sails.constantes.ERROR_ELIMINAR_VEHICULO, res);
            });
        } else {
            Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_VEHICULO, res);
        }
    }
};

