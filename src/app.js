// ============================== IMPORTS =====================================

import express from "express";
import cors from "cors";
import { modules } from "./modules/index.module.js";
import { corsOptions } from "./config/config.js";

// ============================ NOTES ===============================
/**
 * @APP - Servidor principal de adminJsonLens
 *
 * Responsabilidades:
 * - ConfigureJSON middleware y CORS
 * - Registrar módulos dinámicamente
 * - Prefijo /api para todos los endpoints
 * 
 * EXPRESS CORS Y HANDLERS GLOBALES
 *  - Configura Express, CORS y registra módulos dinámicamente
 * 
 * REGISTRO DE MÓDULOS
 * - @prefixAPi | Retorna el prefijo /api usado en toda la aplicación
 * - @useModule |Monta los controladores de cada módulo en rutas con y sin prefijo /api
 * 

 * Flow of the request:
Request → Middleware → Guards → Interceptors → Pipes → Controller → Response
                ↓
         Exception Filter (if there are errors)
 */

// ==============================  EXPRESS _ CORS Y HANDLERS GLOBALES =====================

const app = express();

app.use(express.json());


app.use(cors(corsOptions));
    
// ================================ RUTAS PRINCIPALES ================================

// Endpoint raíz que documenta los servicios disponibles
app.get("/", (req, res) => {
  res.json({
    app: "adminJsonLens",
    message: "API lista. Usa /health, /about o /users.",
  });
});


// ================================ REGISTRO DE MÓDULOS ============================

const API_PREFIX = "/api";

function useModule(currentModule) {
  currentModule.modules
    .filter((item) => item.controller)
    .forEach((item) => {
      app.use("/", item.controller);
      app.use(API_PREFIX, item.controller);
    });
}
// Registra todos los módulos dinámicamente
modules.forEach(useModule);
// Expone el prefijo de API para uso en otros módulos si es necesario

app.prefixApi = () => API_PREFIX;

export default app;
