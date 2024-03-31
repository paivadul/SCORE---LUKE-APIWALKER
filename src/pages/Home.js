import React, { useState } from 'react';
import '../App.css';
import { getSelectTypeWapi } from '../services/charactersApi';
import CharacterType from '../components/characterType';
import { Link } from 'react-router-dom';

const Home = () => {
    const wapiType = ["people", "planets", "species", "starships", "vehicles", "films"]
    const [id, setId] = useState(''); // ID cargado
    const [selectType, setSelectType] = useState(''); // Tipo cargado
    const [dataType, setDataType] = useState(null); // Estado de los datos obtenidos
    const [renderRptaWapi, setRenderRptaWapi] = useState(false); // Estado para controlar el renderizado de characterType

    const handleWapiType = async () => { // Manejar el clic en el botón para renderizar characterType
        setRenderRptaWapi(true)
        try {
                const respuesta = await getSelectTypeWapi(selectType, id); // Obtener los datos
                setDataType(respuesta.data.result.properties); // Establecer los datos obtenidos
            } catch (error) {
                console.log('Estos no son los droides que está buscando', error);
            }
    }

    const changeId = (e) => { // Función para manejar el cambio de ID
        setId(e.target.value); // Actualizar el estado de ID
    }

    const changeType = (e) => { // Función para manejar el cambio de tipo
        setSelectType(e.target.value); // Actualizar el estado de tipo
    }

    return (
        <div className='general'>
            <div className='container'>
                <h1>Star Wars</h1>
                <div className='cont-1'>
                    <label>Search for</label>
                    <select onChange={(e) => changeType(e)}>
                        <option value="">Select Type</option>
                        {
                        wapiType.map((elem, i) => (
                            <option value={elem} key={i}>{elem}</option>
                        ))
                        }
                    </select>
                </div>
                <div className='cont-2'>
                    <label>Id:</label>
                    <input name="id" type='number' onChange={(e) => changeId(e) }/>
                    <button onClick={handleWapiType}>Search</button>
                </div>
                <button>  <Link to={"/"}>Cerrar sesión </Link> </button>
            </div>
            {renderRptaWapi && <CharacterType data={dataType} type={selectType}/>} {/* Renderizar characterType si renderRptaWapi es verdadero */}
        </div>
    );
};

export default Home;
