// ============================== IMPORTS =====================================

import "dotenv/config.js";

// ============================ RESPOSABILIDADES ===============================
/**
 * @CONFIG - Carga de variables de entorno y configuración global
 *
 * Responsabilidades:
 * - Cargar variables de .env
 * - Exportar constantes de configuración (PORT, NODE_ENV, etc.)
 * - Definir y exportar opciones CORS con validación de dominios
 */

// ============================ CARGAR VARIABLES DE ENTORNOS  ===============================

// Carga las variables de entorno desde .env y las asigna a constantes.
export const {
  APP_VERSION = "0.1",
  NODE_ENV = "development",
  PORT = 5700,
  DB_USER,
  DB_PASSWORD,
} = process.env;

// CORS options con validación de dominios específicos
// ============================== CORS  =====================

export const corsOptions = {
  origin: (origin, callback) => {
    // Lista de orígenes permitidos
    const allowedOrigins = ["http://127.0.0.1:5600", "http://localhost:5600"];

    // Permitir localhost con puerto dinámico (ej: Vite dev server)
    if (origin?.endsWith("127.0.0.1:5600")) {
      callback(null, true);
      return;
    }

    // Valida y permite localhost con puerto 5600 (Vite dev server)
    if (origin?.endsWith("localhost:5600")) {
      callback(null, true);
      return;
    }

    // Valida otros orígenes permitidos
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }
    // Rechaza otros orígenes
    callback(null, false);
  },
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
  allowedHeaders: ["Content-Type", "Authorization", "Accept", "x-tenant-id"],
  credentials: true,
};
