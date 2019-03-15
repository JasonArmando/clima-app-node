const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUrl = dir;
    const instance = axios.create({
        baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=' + encodeUrl,
        headers: { 'X-RapidAPI-Key': 'aec30d17b5msh9619f1de6815dcep1a88a2jsn1e948e93993a' }

    });

    const res = instance.get()
        .then(resp => {
            console.log(resp, data.Results[0]);
        })
        .catch(err => {
            console.log('error', err);
        });

    if (res.data.Results.length == 0) {
        throw new Error('No hay resultados para ' + direccion);
    }

    const data = res.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}


module.exports = {
    getLugarLatLng
}