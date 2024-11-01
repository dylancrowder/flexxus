import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import session from "express-session";

// Importación de rutas y utilidades
import articleRoutes from "./routes/article.routes";
import AppError from "./utilitis/appError";
import errorHandler from "./middlewares/middleware.error";
import authRoute from "./routes/auth.routes";

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

// Middleware de manejo de errores
app.use(errorHandler);

// Definición de rutas
app.use("/api/v1", articleRoutes);
app.use("/auth", authRoute);

// Manejo de rutas no encontradas
app.all("*", (req, res, next) => {
  next(
    new AppError(`No se puede encontrar ${req.originalUrl} en esta ruta`, 404)
  );
});

app.listen(PORT, () => {
  console.log(`El servidor está corriendo en el puerto: ${PORT}`);
});
