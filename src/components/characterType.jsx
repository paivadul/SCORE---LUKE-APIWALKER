import React, { useState, useEffect } from "react";
import './charactertype.css'
import imgobi from './obi-wan-kenobi.png'
import imgsky from './skywalker.png'


const CharacterType = ({ data, type, error }) => {
    // Propiedades de diferentes tipos de personajes en Star Wars
    const propByType = {
        people: ["name", "height", "mass", "hair_color"],
        planets: ["name", "diameter", "climate", "terrain"],
        species: ["name", "classification", "average_height", "language"],
        starships: ["name", "model", "manufacturer", "crew"],
        vehicles: ["name", "model", "manufacturer", "crew"],
        films: ["title", "director", "producer", "opening_crawl"]
    };

    // Estado para controlar el estado de carga
    const [loading, setLoading] = useState(true);

    // Efecto para actualizar el estado de carga cuando los datos se cargan
    useEffect(() => {
        if (data && Object.keys(data).length > 0) {
            setLoading(false);
        }
    }, [data]);

    return (
        <div className='rpta-cont'>
            {error ? (
                <div>
                    <h1>Estos no son los droides que está buscando</h1>
                    <img src={imgobi} alt="obi" />
                </div>
            ) : (
                loading ? (
                    <div>Cargando...</div>
                ) : (
                    // Renderizar las propiedades del personaje
                    propByType[type] && data ? (
                        propByType[type].map((prop, i) => (
                            <p key={i}> <b>{prop.replace("_", " ").toUpperCase()}:</b> {data[prop]} </p>
                        ))
                    ) : (
                        // Mostrar un mensaje si no hay datos disponibles
                        <div>
                            <h1>No hay datos disponibles</h1>
                            <img src={imgsky} alt="obi" />
                        </div>
                    )
                )
            )}
        </div>
    );
};

export default CharacterType;
