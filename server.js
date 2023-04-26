const tbody = document.querySelector('[data-tbody]');
var  id = 0;
function creandoUsuario(nombre, edad, telefono, localidad) {
    let tr = document.createElement('tr');
    tr.classList.add('parent');
    let template = `<th scope="row">${++id}</th>
    <td>${nombre}</td>
    <td>${edad}</td>
    <td>${telefono}</td>
    <td>${localidad}</td>
    <td class="btn_editable"><i class="fa-solid fa-pencil btn btn-ligth" data-btn-editar></i></td>
    <td class="btn_borrar"><i class="fa-solid fa-trash btn btn-ligth" data-btn-borrar></i></td>`;
    tr.innerHTML = template;
    return tr;
    
}

const listaRegistro = () =>{
    return fetch('http://localhost:3000/perfil')
    .then(response => {
        return response.json()
    })   
}
listaRegistro()
    .then(data => {
        console.log(data)
     data.forEach(perfil => {
        let nuevaLinea = creandoUsuario(perfil.nombre,perfil.edad,perfil.telefono,perfil.localidad)
        tbody.appendChild(nuevaLinea)
    })
    // .catch(err => alert('Ocurrio un error'))
})
