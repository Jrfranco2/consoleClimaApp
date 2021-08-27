require("dotenv").config();

const {
  pausa,
  inquirerMenu,
  leerInput,
  listarLugares,
} = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  let opt;
  const busquedas = new Busquedas();
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        const buscar = await leerInput("Ciudad: ");
        const lugares = await busquedas.ciudad(buscar);
        const id = await listarLugares(lugares);
        const lugarSel = lugares.find((lugar) => lugar.id === id);
        console.log("\nInformación de la ciudad".green);
        console.log("Ciudad: ", lugarSel.nombre);
        console.log("Latitud: ", lugarSel.lat);
        console.log("Longitud: ", lugarSel.lng);
        break;
      case 2:
        console.log("opcion 2");
    }
    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
