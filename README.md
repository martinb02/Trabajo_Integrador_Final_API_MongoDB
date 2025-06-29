
# Proyecto CRUD con Búsqueda por Nombre

## Descripción

Este proyecto es una aplicación CRUD que permite gestionar productos. Se ha añadido una funcionalidad de búsqueda por nombre, permitiendo a los usuarios buscar productos de manera eficiente y ver los resultados en tiempo real.

## Tecnologías Utilizadas

- **Frontend**:
  - React.js
  - Axios para solicitudes HTTP
  - Vite como entorno de desarrollo

- **Backend**:
  - Node.js
  - Express
  - MongoDB con Mongoose
  - JWT para autenticación

## Instrucciones para Ejecutar

### Backend

1. Clona el repositorio.
2. Navega al directorio del backend.
3. Instala las dependencias con `npm install`.
4. Crea un archivo `.env` con la conexión a tu base de datos y otras variables de entorno necesarias.
5. Ejecuta el servidor con `npm start`.

### Frontend

1. Navega al directorio del frontend.
2. Instala las dependencias con `npm install`.
3. Instala las axios con `npm install axios`.
4. Crea un archivo `.env` con la URL del backend.
5. Ejecuta la aplicación con `npm run dev`.

## Ejemplo de Uso

1. **Agregar Productos**: Usa el formulario de creación de productos para añadir nuevos productos a la base de datos.
2. **Buscar Productos**: Utiliza el campo de búsqueda para buscar productos por nombre. La búsqueda es parcial e insensible a mayúsculas/minúsculas.
3. **Visualizar Resultados**: Los resultados de la búsqueda se mostrarán dinámicamente en la página.

## Variables de Entorno

### Backend

```plaintext
PORT=1234
MONGODB_URI=mongodb://localhost:27017/tu_base_de_datos
JWT_SECRET=tu_secreto_seguro
```

### Frontend

```plaintext
VITE_BACKEND_URL=http://localhost:1234
```

## Estructura del Proyecto

- **Backend**: Contiene la lógica del servidor, modelos, controladores y rutas.
- **Frontend**: Contiene los componentes de React y la lógica de la interfaz de usuario.

## Notas Adicionales

- Asegúrate de tener MongoDB instalado y en ejecución para que el backend pueda conectarse a la base de datos.
- El proyecto utiliza autenticación JWT, por lo que es necesario registrar un usuario o iniciar sesión para acceder a ciertas funcionalidades.

## Enlaces

- Repositorio Base https://github.com/GabrielAlberini/app-utn-final 
