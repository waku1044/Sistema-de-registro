const listaRegistro = ()=> {
    return fetch('http://localhost:3000/perfil')
        .then(response => {
            return response.json()
        })
}
const eliminarUsuario = (id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method:"DELETE"
    })
};

const detalleUsuario = (id) =>{
    return fetch(`http://localhost:3000/perfil/${id}`).then(data => data.json())
}

const actualizarUsuario = (nombre,email,telefono,localidad,id)=>{
    return fetch(`http://localhost:3000/perfil/${id}`,{
        method:'PUT',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ nombre,email,telefono,localidad })
    })
    .then(response => JSON.stringify(response))
    .catch(err => alert('Ocurrio un error'))
};

const crearUsuario = (nombre,email,telefono,localidad)=>{
    return fetch('http://localhost:3000/perfil',{
        method:"POST",
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({nombre, email, telefono, localidad, id:uuid.v4()})
    });
}

export const server = {
    listaRegistro,
    crearUsuario,
    eliminarUsuario,
    actualizarUsuario,
    detalleUsuario
}

