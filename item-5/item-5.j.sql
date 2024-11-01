/* 
 * Consigna:
 5. Dada la siguiente base de datos relacional, resolver las consultas en SQL.
 
 * Lógica aplicada para la resolución:
 - Crear las tablas "LOCALIDADES","DEPARTAMENTOS", "PUESTOS" y "EMPLEADOS" con sus respectivas estructuras,claves primarias y foráneas.

 - Insertar datos de prueba en las tablas ("LOCALIDADES","DEPARTAMENTOS","PUESTOS", "EMPLEADOS") para validar las consultas. 

 - Realizar las consultas solicitadas para obtener la información de empleados, departamentos, puestos y localidades. 
 
 - Ejecutar consultas para extraer datos específicos y confirmar su funcionamiento. 
 
 * Cómo ejecutar el código:
 - Correr el script en un entorno de base de datos compatible con SQL, como MySQL Workbench o similar.
 
  */



-- CREAR E INICIAR BASE DE DATOS
CREATE DATABASE item5;
USE item5;

-- CREAR TABLAS 
CREATE TABLE LOCALIDADES (
    ID INT PRIMARY KEY,
    LOCALIDAD VARCHAR(80) NOT NULL UNIQUE,
    ACTIVO INT NOT NULL
);

-- DEPARTAMENTOS
CREATE TABLE DEPARTAMENTOS (
    ID INT PRIMARY KEY,
    DENOMINACION VARCHAR(80) NOT NULL UNIQUE,
    LOCALIDAD_ID INT NOT NULL,
    FOREIGN KEY (LOCALIDAD_ID) REFERENCES LOCALIDADES (ID)
);

-- PUESTOS
CREATE TABLE PUESTOS (
    ID INT PRIMARY KEY,
    PUESTO VARCHAR(80) NOT NULL UNIQUE,
    ACTIVO INT NOT NULL
);

-- EMPLEADOS
CREATE TABLE EMPLEADOS (
    ID INT PRIMARY KEY,
    NOMBRES VARCHAR(80) NOT NULL,
    APELLIDO VARCHAR(80) NOT NULL,
    EDAD INT NOT NULL CHECK (EDAD > 0),
    FECHAALTA DATE NOT NULL,
    SUELDO DOUBLE NOT NULL CHECK (SUELDO >= 0),
    COMISION DOUBLE NOT NULL CHECK (COMISION >= 0),
    DEPARTAMENTO_ID INT NOT NULL,
    PUESTO_ID INT NOT NULL,
    FOREIGN KEY (DEPARTAMENTO_ID) REFERENCES DEPARTAMENTOS (ID),
    FOREIGN KEY (PUESTO_ID) REFERENCES PUESTOS (ID)
);



-- INSERTAR DATOS
-- Localidades
INSERT INTO LOCALIDADES (ID, LOCALIDAD, ACTIVO) VALUES (1, 'Córdoba', 1);
INSERT INTO LOCALIDADES (ID, LOCALIDAD, ACTIVO) VALUES (2, 'Madrid', 1);
INSERT INTO LOCALIDADES (ID, LOCALIDAD, ACTIVO) VALUES (3, 'Barcelona', 1);
INSERT INTO LOCALIDADES (ID, LOCALIDAD, ACTIVO) VALUES (4, 'Valencia', 1);
INSERT INTO LOCALIDADES (ID, LOCALIDAD, ACTIVO) VALUES (5, 'Carlos Paz', 1);

-- Departamentos 
INSERT INTO DEPARTAMENTOS (ID, DENOMINACION, LOCALIDAD_ID) VALUES (1, 'Recursos Humanos', 1);
INSERT INTO DEPARTAMENTOS (ID, DENOMINACION, LOCALIDAD_ID) VALUES (2, 'Soporte', 1);
INSERT INTO DEPARTAMENTOS (ID, DENOMINACION, LOCALIDAD_ID) VALUES (3, 'Desarrollo', 2);
INSERT INTO DEPARTAMENTOS (ID, DENOMINACION, LOCALIDAD_ID) VALUES (4, 'Ventas', 3);
INSERT INTO DEPARTAMENTOS (ID, DENOMINACION, LOCALIDAD_ID) VALUES (5, 'Marketing', 4);
INSERT INTO DEPARTAMENTOS (ID, DENOMINACION, LOCALIDAD_ID) VALUES (6, 'Atención al Cliente', 5);
INSERT INTO DEPARTAMENTOS (ID, DENOMINACION, LOCALIDAD_ID) VALUES (10, 'UX UI', 5);

-- Puestos 
INSERT INTO PUESTOS (ID, PUESTO, ACTIVO) VALUES (1, 'Gerente', 1);
INSERT INTO PUESTOS (ID, PUESTO, ACTIVO) VALUES (2, 'Analista', 1);
INSERT INTO PUESTOS (ID, PUESTO, ACTIVO) VALUES (3, 'Programador', 1);
INSERT INTO PUESTOS (ID, PUESTO, ACTIVO) VALUES (4, 'Soporte', 1);
INSERT INTO PUESTOS (ID, PUESTO, ACTIVO) VALUES (5, 'Vendedor', 1);
INSERT INTO PUESTOS (ID, PUESTO, ACTIVO) VALUES (6, 'Asistente', 1);

-- Empleados
INSERT INTO EMPLEADOS (
    ID,
    NOMBRES,
    APELLIDO,
    EDAD,
    FECHAALTA,
    SUELDO,
    COMISION,
    DEPARTAMENTO_ID,
    PUESTO_ID
) VALUES
    (1, 'Juan', 'Pérez', 30, '2023-01-15', 12000, 0.05, 1, 1),
    (2, 'María', 'Gómez', 28, '2023-02-20', 15000, 0.10, 2, 4),
    (3, 'Pedro', 'López', 35, '2023-03-10', 11000, 0.07, 3, 2),
    (4, 'Ana', 'Martínez', 32, '2023-01-25', 9500, 0.03, 1, 2),
    (5, 'Luis', 'Hernández', 40, '2023-02-15', 13000, 0.08, 2, 3),
    (6, 'Laura', 'Díaz', 27, '2023-03-05', 10500, 0.06, 3, 4),
    (7, 'Carlos', 'Fernández', 29, '2023-03-20', 16000, 0.09, 4, 5),
    (8, 'Sofía', 'Jiménez', 31, '2023-01-30', 14000, 0.04, 2, 1),
    (9, 'Diego', 'Morales', 26, '2023-02-25', 11500, 0.06, 3, 3),
    (10, 'Camila', 'Ramírez', 33, '2023-03-15', 12500, 0.08, 4, 2),
    (11, 'Dylan', 'Rojo', 28, '2023-03-15', 12500, 0.08, 3, 3),
    (12, 'Steve', 'Jobs', 33, '2023-03-15', 12500, 0.08, 6, 3),
    (13, 'Roberto', 'Gomez', 32, '2023-03-15', 11500, 0.08, 6, 3),
    (14, 'Alverto', 'Durutti', 35, '2023-03-15', 13400, 0.08, 6, 3),
    (15, 'Gabriella', 'Chiarini', 30, '2023-03-15', 18900, 0.08, 6, 3),
    (16, 'Melina', 'Crowder', 23, '2023-03-15', 19000, 0.08, 6, 3),
    (17, 'Raul', 'Rojo', 18, '2023-03-15', 18600, 0.08, 6, 3),
    (18, 'Sofia', 'Ramirez', 38, '2023-03-15', 18600, 0.08, 10, 3),
    (19, 'Carla', 'Andrade', 28, '2023-03-15', 10600, 0.08, 10, 3);


-- CONSULTAS
-- 1. Mostrar los nombres de los empleados ordenados alfabéticamente (Z...A)
SELECT
    NOMBRES,
    APELLIDO
FROM
    EMPLEADOS
ORDER BY
    NOMBRES DESC;

-- 2. Seleccionar el nombre, el puesto y la localidad donde trabajan los empleados con puesto de ‘Soporte’
SELECT
    EMPLEADOS.NOMBRES,
    PUESTOS.PUESTO,
    LOCALIDADES.LOCALIDAD
FROM
    EMPLEADOS
    JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID
    JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID
    JOIN LOCALIDADES ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADES.ID
WHERE
    PUESTOS.PUESTO = 'Soporte';

-- 3. Listar los nombres de los empleados cuyo nombre termine con la letra ‘o’.
SELECT
    NOMBRES
FROM
    EMPLEADOS
WHERE
    NOMBRES LIKE '%o';

-- 4. Seleccionar el nombre, el puesto y sueldo de los empleados que trabajan en la localidad Carlos Paz.
SELECT
    EMPLEADOS.NOMBRES,
    PUESTOS.PUESTO,
    EMPLEADOS.SUELDO
FROM
    EMPLEADOS
    JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID
    JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID
    JOIN LOCALIDADES ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADES.ID
WHERE
    LOCALIDADES.LOCALIDAD LIKE 'Carlos Paz';

-- 5. Seleccionar el nombre, sueldo y localidad donde trabajan de los empleados que tengan un sueldo entre 10000 y 13000
SELECT
    EMPLEADOS.NOMBRES,
    EMPLEADOS.SUELDO,
    LOCALIDADES.LOCALIDAD
FROM
    EMPLEADOS
    JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID
    JOIN LOCALIDADES ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADES.ID
WHERE
    EMPLEADOS.SUELDO BETWEEN 10000
    AND 13000;

-- 6.Visualizar los departamentos con más de 5 empleados
SELECT
    DEPARTAMENTOS.DENOMINACION AS DEPARTAMENTO,
    COUNT(EMPLEADOS.ID) AS NUMERO_EMPLEADOS
FROM
    DEPARTAMENTOS
    JOIN EMPLEADOS ON DEPARTAMENTOS.ID = EMPLEADOS.DEPARTAMENTO_ID
GROUP BY
    DEPARTAMENTOS.DENOMINACION
HAVING
    COUNT(EMPLEADOS.ID) > 5;

-- 7. Nombre de los empleados que trabajan en Córdoba y cuyo puesto sea ‘Analista’ o ‘Programador’
SELECT
    EMPLEADOS.NOMBRES
FROM
    EMPLEADOS
    JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID
    JOIN DEPARTAMENTOS ON EMPLEADOS.DEPARTAMENTO_ID = DEPARTAMENTOS.ID
    JOIN LOCALIDADES ON DEPARTAMENTOS.LOCALIDAD_ID = LOCALIDADES.ID
WHERE
    LOCALIDADES.LOCALIDAD = 'Córdoba'
    AND PUESTOS.PUESTO IN ('Analista', 'Programador');

-- 8. Calcula el sueldo medio de todos los empleados
SELECT
    AVG(SUELDO) AS SUELDO_MEDIO
FROM
    EMPLEADOS;

-- 9. ¿Cuál es el máximo sueldo de los empleados del departamento 10?
SELECT
    MAX(SUELDO) AS SUELDO_MAXIMO
FROM
    EMPLEADOS
WHERE
    DEPARTAMENTO_ID = 10;

-- 10. Calcula el sueldo mínimo de los empleados del departamento ‘Soporte’.
SELECT
    MIN(EMPLEADOS.SUELDO) AS SUELDO_MINIMO
FROM
    EMPLEADOS
    JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID
WHERE
    PUESTOS.PUESTO = 'Soporte';

-- 11 Para cada puesto obtener la suma de sueldos.
SELECT
    PUESTOS.PUESTO,
    SUM(EMPLEADOS.SUELDO) AS TOTAL_SUELDOS
FROM
    EMPLEADOS
    JOIN PUESTOS ON EMPLEADOS.PUESTO_ID = PUESTOS.ID
GROUP BY
    PUESTOS.PUESTO;