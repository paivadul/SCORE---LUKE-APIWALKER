import React, { useState, useEffect } from "react";
import './charactertype.css'
import imgobi from './obi-wan-kenobi.png'
import imgsky from './skywalker.jpg'

const STATES = {     // Array de objetos para controlar el estado de carga
    "LOADING": 0,
    "ERROR": 1,
    "READY": 2
}

const CharacterType = ({ data, type}) => {
    // Propiedades de diferentes tipos de personajes en Star Wars
    const propByType = {
        people: ["name", "height", "mass", "hair_color"],
        planets: ["name", "diameter", "climate", "terrain"],
        species: ["name", "classification", "average_height", "language"],
        starships: ["name", "model", "manufacturer", "crew"],
        vehicles: ["name", "model", "manufacturer", "crew"],
        films: ["title", "director", "producer", "opening_crawl"]
    };

    const [state, setState] = useState(STATES.LOADING); 
    // Efecto para actualizar el estado de carga cuando los datos se cargan

    useEffect(() => {
        if (data && Object.keys(data).length > 0) {
            setState(STATES.READY);
        } else {
            setState(STATES.ERROR);
        }
    }, [data]);

        switch (state) {
            case STATES.READY:
                // Renderizar las propiedades del personaje
            return  (   <div className="rpta-cont">
                            {propByType[type] && data ? (
                                propByType[type].map((prop, i) => (
                                    <p key={i}> <b>{prop.replace("_", " ").toUpperCase()}:</b> {data[prop]} </p>)))
                            :   <div>
                                    <h1>No hay datos disponibles</h1>
                                    <img src={imgsky} alt="obi" />
                                </div>}
                        </div>
            )
            case STATES.LOADING:
                return <div className="rpta-cont">Cargando...</div>
            case STATES.ERROR:
                return (<div className="rpta-cont">
                            <h1>Estos no son los droides que está buscando</h1>
                            <img src={imgobi} alt="obi" />
                        </div>) 
            default:
                break;
        }
};

export default CharacterType;