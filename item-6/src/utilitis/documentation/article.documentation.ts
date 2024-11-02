/**
 * @swagger
 * tags:
 *   name: Artículos
 *   description: CRUD de articulos.
 */

/**
 * @swagger
 * /api/v1/articles:
 *   get:
 *     summary: Obtiene una lista de artículos filtrada por nombre, estado, y coincidencia exacta
 *     tags: [Artículos]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Nombre del artículo a buscar
 *       - in: query
 *         name: is_active
 *         schema:
 *           type: boolean
 *         description: Estado del artículo (activo o inactivo)
 *       - in: query
 *         name: exact_match
 *         schema:
 *           type: boolean
 *         description: Si la coincidencia debe ser exacta en el nombre del artículo
 *     responses:
 *       200:
 *         description: Lista de artículos obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     description: ID único del artículo
 *                   name:
 *                     type: string
 *                     description: Nombre del artículo
 *                   description:
 *                     type: string
 *                     description: Descripción del artículo
 *                   is_active:
 *                     type: boolean
 *                     description: Estado del artículo (activo o inactivo)
 *       400:
 *         description: Parámetros de consulta inválidos
 *       404:
 *         description: No se encontraron artículos que coincidan con los filtros
 *       500:
 *         description: Error en la estructura de los datos de respuesta o error interno del servidor
 */
