
# Proyecto Node.js con Express, TypeScript y MySQL

## Descripción


## Stack Tecnológico

- **Express**
- **TypeScript**
- **MySQL**

## Middlewares

### Middleware de Errores
- Muestra un mensaje de error personalizado.
- Devuelve un código de estado adecuado.
- Registra el error genérico en la consola para su seguimiento.

### Middleware de Autenticación
- Implementado utilizando **express-session**.
- Funcionalidades:
  - **Login de usuario**: Autenticación de usuarios para acceder a la API.
  - **Logout de usuario**: Cierre de sesión y destrucción de la sesión activa.

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/dylancrowder/flexxus.git
   ```

2. **Navega a la carpeta del proyecto:**
   ```bash
   cd item-6/src
   ```

3. **Instala las dependencias:**
   ```bash
   npm install
   ```

## Ejecución del Proyecto

Para iniciar el servidor de desarrollo, ejecuta el siguiente comando:

```bash
npm run dev
```

## Detalles de Autenticación

Para acceder a la API, utiliza las siguientes credenciales:

- **Usuario**: `admin`
- **Contraseña**: `123`


## Documentación API

Para ver la documentación completa en Swagger de la API, corre el servidor e ingresa a:

```
http://localhost:8080/api-docs
```
