import axios from 'axios';


// const selectType= ["people", "planets", "species", "starships", "vehicles", "films"]

export const getSelectTypeWapi = async (selectType, id) => {
    const respuesta = await axios.get(`https://www.swapi.tech/api/${selectType}/${id}`);
    console.log('people: ', respuesta)
    return respuesta
}

// export const searchType = async (limit) => {
//     const respuesta = await Axios.get(
//         // `https://www.swapi.tech/api/${selectType}/${id}`
//         );
//         console.log("respuesta searchCharacter", respuesta);
//         return respuesta;
//     };

// export const getPlanets = async (id) => {
//     const respuesta = await Axios.get(`https://www.swapi.tech/api/planets/${id}`);
//     console.log('planet: ', respuesta)
//     return respuesta
// }

// export const getSpecies = async (id) => {
//     const respuesta = await Axios.get(`https://www.swapi.tech/api/species/${id}`);
//     console.log('specie: ', respuesta)
//     return respuesta
// }

// export const getStarships = async (id) => {
//     const respuesta = await Axios.get(`https://www.swapi.tech/api/starships/${id}`);
//     console.log('starship: ', respuesta)
//     return respuesta
// }

// export const getVehicles = async (id) => {
//     const respuesta = await Axios.get(`https://www.swapi.tech/api/vehicles/${id}`);
//     console.log('vehicle: ', respuesta)
//     return respuesta
// }

// export const getFilms = async (id) => {
//     const respuesta = await Axios.get(`https://www.swapi.tech/api/films/${id}`);
//     console.log('film: ', respuuesta)
//     return respuesta
// }