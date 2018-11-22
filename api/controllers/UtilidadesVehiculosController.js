/**
 * UtilidadesVehiculosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    obtenerVehiculoPorId: async function (idVehiculo) {
        return await Vehiculo.find({ where: { id: idVehiculo } });
    }
};

