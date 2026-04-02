// ============================== HEALTH SERVICE ===============================

/**
 * Obtiene el estado básico de la API
 * @returns {Object} Estado de la API
 */
export function getHealthService() {
  return {
    app: "adminJsonLens",
    status: "Ok",
    version: "0.1",
    timestamp: new Date().toISOString(),
  };
}

export default getHealthService;
