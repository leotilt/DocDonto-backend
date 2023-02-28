const express = require("express");
const app = express();
const routes = require("./routes/routes");
const bodyParser = require("body-parser");

/* Remover em Produção */
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:4200",
  })
);
/* REMOVER EM PRODUÇÃO */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen(3000, function () {
  console.log("Servidor iniciado na porta 3000");
});



/* ROOT_PASSWORD=63524100 - arquivo .env na raiz do diretorio  */ 