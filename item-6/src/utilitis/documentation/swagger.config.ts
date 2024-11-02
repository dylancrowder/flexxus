export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Articulos Flexxus",
      version: "1.0.0",
      description: "Documentación de API para Flexxus",
    },
    servers: [
      {
        url: "http://localhost:8080",
        description: "Servidor de desarrollo",
      },
    ],
  },
  apis: ["./routes/*.ts"],
};
