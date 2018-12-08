/**
 * UseriossController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Utilidades = require('./UtilidadesController');
const UtilidadesUsuarios = require('./UtilidadesUsuariosController');

module.exports = {
    obtenerUsuarios: async function (req, res) {
        try {
            const usuarioInfo = req.allParams();
            const limite = sails.limitePaginacion;
            const skip = Number(usuarioInfo.pagina) * limite;
            const where = await UtilidadesUsuarios.obtenerFiltros(usuarioInfo.filtros);
            let usuarios = await Usuario.find({
                where: where,
                skip: skip,
                limit: limite
            }).sort('id DESC');
            if (!usuarios || usuarios.length === 0) {
                Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_USUARIOS, res);
            } else {
                for (let i = 0; i < usuarios.length; i++) {
                    usuarios[i].estado = await Utilidades.obtenerEstado(usuarios[i].estado);
                }
                const cantidad = await UtilidadesUsuarios.obtenerCantidadDeUsuarios(where);
                const infoUsuarios = {
                    usuarios: usuarios,
                    cantidad: cantidad
                }
                Utilidades.respuestaRetorno(true, sails.constantes.USUARIOS_ENCONTRADOS, res, infoUsuarios);
            }
        } catch (error) {
            sails.log.debug(error);
            Utilidades.respuestaRetorno(false, sails.constantes.ERROR_HALLAR_USUARIOS, res);
        }
    },
    obtenerUsuarioPorId: async function (req, res) {
        let usuarioInfo = req.allParams();
        try {
            let usuario = await Usuario.find({ where: { id: usuarioInfo.id } });
            if (!usuario || usuario.length === 0) {
                Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_USUARIO, res);
            } else {
                Utilidades.respuestaRetorno(true, sails.constantes.USUARIO_ENCONTRADO, res, usuario);
            }
        } catch (error) {
            sails.log.debug(err);
            Utilidades.respuestaRetorno(false, sails.constantes.ERROR_HALLAR_USUARIO, res);
        }
    },
    crearUsuario: async function (req, res) {
        let usuarioInfo = req.allParams();
        let existeIdentificacion = await UtilidadesUsuarios.obtenerPorIdentificacion(usuarioInfo.identificacion);
        let existeCorreoElectronico = await UtilidadesUsuarios.obtenerPorCorreoElectronico(usuarioInfo.correoElectronico);
        if (existeCorreoElectronico.length === 0 && existeIdentificacion.length === 0) {
            let usuario = {
                tipoIdentificacion: usuarioInfo.tipoIdentificacion,
                identificacion: usuarioInfo.identificacion,
                primerNombre: usuarioInfo.primerNombre,
                segundoNombre: usuarioInfo.segundoNombre,
                primerApellido: usuarioInfo.primerApellido,
                segundoApellido: usuarioInfo.segundoApellido,
                correoElectronico: usuarioInfo.correoElectronico,
                telefono: usuarioInfo.telefono,
                celular: usuarioInfo.celular,
                direccion: usuarioInfo.direccion,
                estado: sails.estados.ACTIVO
            }
            await Usuario.create(usuario).then(() => {
                Utilidades.respuestaRetorno(true, sails.constantes.USUARIO_CREADO, res);
            }).catch((err) => {
                sails.log.debug(err);
                Utilidades.respuestaRetorno(false, sails.constantes.ERROR_CREAR_USUARIO, res);
            });
        } else {
            Utilidades.respuestaRetorno(false, sails.constantes.CORREO_IDENTIFICACION_YA_EXISTE, res);
        }
    },
    actualizarUsuario: async function (req, res) {
        let usuarioInfo = req.allParams();
        let usuarioExistente = await UtilidadesUsuarios.obtenerPorId(usuarioInfo.id);
        if (usuarioExistente.length > 0) {
            let usuario = {
                tipoIdentificacion: usuarioInfo.tipoIdentificacion,
                identificacion: usuarioInfo.identificacion,
                primerNombre: usuarioInfo.primerNombre,
                segundoNombre: usuarioInfo.segundoNombre,
                primerApellido: usuarioInfo.primerApellido,
                segundoApellido: usuarioInfo.segundoApellido,
                correoElectronico: usuarioInfo.correoElectronico,
                telefono: usuarioInfo.telefono,
                celular: usuarioInfo.celular,
                direccion: usuarioInfo.direccion
            }
            await Usuario.update(usuarioExistente[0].id, usuario).then(() => {
                Utilidades.respuestaRetorno(true, sails.constantes.USUARIO_ACTUALIZADO, res);
            }).catch((err) => {
                sails.log.debug(err);
                Utilidades.respuestaRetorno(false, sails.constantes.ERROR_ACTUALIZAR_USUARIO, res);
            });
        } else {
            Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_USUARIO, res);
        }
    },
    eliminarUsuario: async function (req, res) {
        let usuarioInfo = req.allParams();
        if (usuarioInfo.idUsuario) {
            let usuarioExistente = await UtilidadesUsuarios.obtenerPorId(usuarioInfo.idUsuario);
            if (usuarioExistente.length > 0) {
                let usuario = {
                    estado: false
                }
                await Usuario.update(usuarioExistente[0].id, usuario).then(() => {
                    Utilidades.respuestaRetorno(true, sails.constantes.USUARIO_ELIMINADO, res);
                }).catch((err) => {
                    sails.log.debug(err);
                    Utilidades.respuestaRetorno(false, sails.constantes.ERROR_ELIMINAR_USUARIO, res);
                });
            } else {
                Utilidades.respuestaRetorno(false, sails.constantes.NO_ENCONTRO_USUARIO, res);
            }
        } else {
            Utilidades.respuestaRetorno(false, sails.constantes.NO_ID_USUARIO, res);
        }
    }
};

