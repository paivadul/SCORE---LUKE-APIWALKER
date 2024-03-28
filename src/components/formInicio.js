const formInicio = () => {

    const [ingreso, setIngreso] = useState({
        correo: "",
        contraseña: "",
    })

    const handleIngreso= (e)  => {
        const {name, value} = e.target;
        setIngreso({...ingreso, [name]:value})

    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try (
    //         const respuesta = await axios.post('http://localhost:3001/login', ingreso);
    //         console.log(respuesta);
    //     )
    // }

    return (
        <div>
            <h1 onSubmit={(e) => {handleSubmit(e)}}>Formulario de ingreso</h1>
            <input name="correo" value={ingreso.correo} type="text" onChange={(e) => handleIngreso(e)}></input>
            <input name="contraseña" value={ingreso.contraseña} type="password" onChange={(e) => handleIngreso(e)}></input>
            <button type="submit"></button>
        </div>
    )
}