const app = require("./app");
const { PORT } = require("./config/config");

app.listen(PORT, () => {
  console.log(`adminJsonLens escuchando en http://localhost:${PORT}`);
});
