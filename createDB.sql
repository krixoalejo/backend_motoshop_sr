// Página para instalar el postgres
http://www.postgresqltutorial.com/install-postgresql/

// Para crear el rol que se va a usar en postgres.
CREATE ROLE motoshopsr LOGIN PASSWORD 'motoshopsr';

// Para ver los roles creados.
SELECT rolname FROM pg_roles;

// Para crear la base de datos a usar.
CREATE DATABASE motoshopsr OWNER motoshopsr;

// Insertar usuario prueba
INSERT INTO public.usaurios(
	"createdAt", "updatedAt", "idUsuario", "tipoIdentificacion", identificacion, "primerNombre", "segundoNombre", "primerApellido", "segundoApellido", "correoElectronico", telefono, celular, direccion, estado)
	VALUES ( '1542090946', '1542090946', default, 'CC', '12312312', 'Juan', 'Daniel', 'Perez', '', 'juanperez@gmail.com', '312312', '320312312312', 'Calle Ojala', 1);

INSERT INTO public.vehiculos(
	"createdAt", "updatedAt", "idVehiculo", placa, marca, linea, modelo, cilindraje, color, usuario, seguro, estado)
	VALUES ( '1542090946', '1542090946', default, 'MHT67G', 'Yamaha', 'XTZ', '2017', '250', 'Negro', 1, 0, 1 );