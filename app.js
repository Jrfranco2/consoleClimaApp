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

        if (id === "0") continue;

        const lugarSel = lugares.find((lugar) => lugar.id === id);

        busquedas.agregarHistorial(lugarSel.nombre);

        const clima = await busquedas.climaLugar(lugarSel.lat, lugarSel.lng);

        //info
        console.log("\nInformación de la ciudad\n".green);
        console.log("Ciudad: ", lugarSel.nombre.cyan);
        console.log("Latitud: ", `${lugarSel.lat}`.cyan);
        console.log("Longitud: ", `${lugarSel.lng}`.cyan);
        console.log("Clima: ", clima.desc.cyan);
        console.log("Temperatura: ", `${clima.temp}`.cyan);
        console.log("Temperatura Mínima: ", `${clima.min}`.cyan);
        console.log("Temperatura Máxima: ", `${clima.max}`.cyan);
        break;
      case 2:
        busquedas.historialCapitalizado.forEach((lugar, i) => {
          const index = `${i + 1}.`.green;
          console.log(`${index} ${lugar}`);
        });
        break;
    }
    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
