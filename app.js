const { pausa, inquirerMenu } = require("./helpers/inquirer");

const main = async () => {
  let opt;
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case 1:
        console.log("opcion 1");
        break;
      case 2:
        console.log("opcion 2");
    }
    if (opt !== 0) await pausa();
  } while (opt !== 0);
};

main();
