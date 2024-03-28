import React from "react";
import './charactertype.css'
import img from './obi-wan-kenobi.png'

const characterType = ({ data, type, error }) => {
    const propByType = {
        people: ["name", "height", "mass", "hair_color"],
        planets: ["name", "diameter", "climate", "terrain"],
        species: ["name", "classification", "average_height", "language"],
        starships: ["name", "model", "manufacturer", "crew"],
        vehicles: ["name", "model", "manufacturer", "crew"],
        films: ["title", "director", "producer", "opening_crawl"]
    }
    
    const propToShow = propByType[type];

    return (
        <div className='rpta-cont'>
            {error ? ( // Verificar si hay un error
                <div>
                    <h1>Estos no son los droides que está buscando</h1>
                    <img src={img} alt="obi" />
                </div>
            ) : (
                propToShow && data ? ( // Verificar si existen datos y propiedades para mostrar
                    propToShow.map((prop, i) => (
                        <p key={i}> <b>{prop.replace("_", " ").toUpperCase()}:</b> {data[prop]} </p>
                    ))
                ) : (
                    <div>No hay datos disponibles</div>
                )
            )}
        </div>
    )
}

export default characterType;