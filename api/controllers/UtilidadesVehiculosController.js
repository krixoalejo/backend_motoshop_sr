/**
 * UtilidadesVehiculosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

 const UtilidadesUsuarios = require('./UtilidadesUsuariosController');

module.exports = {
    obtenerVehiculoPorId: async function (idVehiculo) {
        return await Vehiculo.find({ where: { id: idVehiculo } });
    },
    obtenerVehiculoPorPlaca: async function (placa) {
        return await Vehiculo.find({ where: { placa: placa } });
    },
    obtenerCantidadDeVehiculos: async function (filtros) {
        return await Vehiculo.count({ where: filtros });
    },
    obtenerFiltros: async function (filtros) {  
        let where = {};
        let desde, hasta;
        if (filtros.desde && filtros.hasta) {
            const fDesde = filtros.desde.year + '/' + filtros.desde.month + '/' + filtros.desde.day;
            desde = new Date(fDesde).getTime();
            const fHasta = filtros.hasta.year + '/' + filtros.hasta.month + '/' + filtros.hasta.day;
            hasta = new Date(fHasta).getTime();
            where.createdAt = { '>=': desde, '<=': hasta };
        } else if (filtros.desde) {
            const fDesde = filtros.desde.year + '/' + filtros.desde.month + '/' + filtros.desde.day;
            desde = new Date(fDesde).getTime();
            where.createdAt = { '>=': desde };
        } else if (filtros.hasta) {
            const fHasta = filtros.hasta.year + '/' + filtros.hasta.month + '/' + filtros.hasta.day;
            hasta = new Date(fHasta).getTime();
            where.createdAt = { '<=': hasta };
        }
        if (filtros.placa && filtros.placa !== '' && filtros.placa !== 0) {
            where.placa = { 'contains': filtros.placa }
        }
        if (filtros.marca && filtros.marca !== '') {
            where.marca = { 'contains': filtros.marca };
        }
        if (filtros.linea && filtros.linea !== '') {
            where.linea = { 'contains': filtros.linea };
        }
        if (filtros.modelo && filtros.modelo !== '' && filtros.modelo !== 0) {
            where.modelo = { 'contains': filtros.modelo };
        }
        if (filtros.cilindraje && filtros.cilindraje !== '' && filtros.cilindraje !== 0) {
            where.cilindraje = { 'contains': filtros.cilindraje };
        }
        if (filtros.color && filtros.color !== '') {
            where.color = { 'contains': filtros.color };
        }
        if (filtros.propietario && filtros.propietario !== '') {
            where.or = [];
            const idUsuarios = await UtilidadesUsuarios.obtenerUsuariosPorNombre(filtros.propietario);
            if (idUsuarios && idUsuarios.length > 0) {
                for (let i = 0; i < idUsuarios.length; i++) {
                    where.or.push({usuario : idUsuarios[i]});
                }
            }
        }
        if (filtros.estado === 'Activo') {
            where.estado = 1;
        } else if (filtros.estado === 'Inactivo'){
            where.estado = 0;
        }      
        return where;
    }
};

