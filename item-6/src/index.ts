import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import session from "express-session";
import swaggerUi from "swagger-ui-express";
import { swaggerDocs } from "./utilitis/documentation/swagger.config";

// Importación de rutas y utilidades
import articleRoutes from "./routes/article.routes";
import authRoute from "./routes/auth.routes";
import { errorHandler } from "./middlewares/error.middleware";

// Cargar variables de entorno
dotenv.config();

// Inicializar la aplicación Express
const app = express();
const PORT = process.env.PORT || 8080;

// Configuración de middlewares
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(bodyParser.json());
app.use(
  session({
    secret: "123",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 30,
    },
  })
);

// Definición de rutas
app.use("/api/v1", articleRoutes);
app.use("/auth", authRoute);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({
    error: "pagina no encontrada",
    message: `No se encontró la ruta ${req.originalUrl}`,
  });
});

// Middleware de manejo de errores
app.use(errorHandler);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto: ${PORT}`);
});
