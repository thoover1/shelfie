require("dotenv").config();

const express = require("express");
const massive = require("massive");
const controller = require("./controller");
const app = express();

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING)
  .then(dbInstance => {
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(express.json());

app.get("/api/product", controller.getProduct);
// app.post("/api/product", controller.postProduct);
// app.put("/api/product/:id", controller.putProduct);
// app.delete("/api/product/:id", controller.deleteProduct);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
