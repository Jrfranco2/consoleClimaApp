const axios = require("axios");

class Busquedas {
  historial = ["a", "b", "c"];

  constructor() {}

  get paramsMapBox() {
    return {
      access_token: process.env.MAPBOX_KEY,
      limit: 5,
      language: "es",
    };
  }

  async ciudad(lugar = "") {
    console.log(lugar);
    try {
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
        params: this.paramsMapBox,
      });
      const res = await instance.get();
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Busquedas;
