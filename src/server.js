import app from "./app.js";
import { PORT } from "./config/config.js";


// ======================= ENV CONFIG ======================================

/**
 * Punto de entrada principal del servidor.
 * Este archivo configura Express, registra middlewares,
 * conecta rutas y arranca la aplicacion.
 *
 * @SERVER | node server.js
 *
 */



app.listen(PORT, () => {
  console.log(`adminJsonLens escuchando en http://localhost:${PORT}`);
});


// ======================= START SERVER ====================================

// ======================= GLOBAL ERROR HANDLERS ===========================
