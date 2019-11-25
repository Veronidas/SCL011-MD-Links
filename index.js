const fs = require("fs");
const path = require("path");

//el metodo readFile recibe 3 parametros: la ruta al archivo, la codificación
// y una función que va a ser invocada cuando se lea el archivo( callback).

fs.readFile("vero.txt", "utf8", function(err, data) {
  if (err) {
    return console.log(err);
  }

  console.log(data);
});
