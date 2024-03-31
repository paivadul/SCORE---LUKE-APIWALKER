import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './formInicio.css';

const FormInicio = () => {

    const [ingreso, setIngreso] = useState({
        correo: "",
        contraseña: "",
    })

    const handleIngreso= (e)  => {
        const {name, value} = e.target;
        setIngreso({...ingreso, [name]:value})

    }

    return (
        <div className="container">
            <h1>Formulario de ingreso</h1>
            <div>
                <label>Correo: </label>
                <input name="correo" value={ingreso.correo} type="text" onChange={(e) => handleIngreso(e)}></input>
            </div>
                <div>
                <label>Contraseña: </label>
                <input name="contraseña" value={ingreso.contraseña} type="password" onChange={(e) => handleIngreso(e)}></input>
            </div>
            {/* <button type="submit"><a href="/Home">Ingresar</a></button> */}
            <button> <Link to={"/Home"}>Ingresar</Link> </button>
        </div>
    )
}

export default FormInicio;

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try (
    //         const respuesta = await axios.post('http://localhost:3001/login', ingreso);
    //         console.log(respuesta);
    //     )
    // }
