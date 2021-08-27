require("dotenv").config();

const { pausa, inquirerMenu, leerInput } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () => {
  let opt;
  const busquedas = new Busquedas();
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        const lugar = await leerInput("Ciudad: ");
        await busquedas.ciudad(lugar);
        console.log("\nInformación de la ciudad".green);
        console.log("Ciudad: ");
        break;
      case 2:
        console.log("opcion 2");
    }
    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
