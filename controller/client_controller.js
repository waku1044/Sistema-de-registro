import { server } from '../server_cliente/server.js';

const tbody = document.querySelector('[data-tbody]');
    var num = 0;
    const mostrandoUsuario = (nombre, email, telefono, localidad,id)=>  {
        let tr = document.createElement('tr');
        tr.classList.add('parent');
        let template = `<th scope="row">${++num}</th>
        <td>${nombre}</td>
        <td>${email}</td>
        <td>${telefono}</td>
        <td>${localidad}</td>
        <td class="btn_editable"><a href='/editable.html?id=${id}'><i class="fa-solid fa-pencil" data-btn-edit></i></a></td>
        <td class="btn_borrar"><i class="fa-sharp fa-solid fa-trash" id='${id}' data-btn-borrar></i></td>`
        
        tr.innerHTML = template;
        
        let btn_borrar = tr.querySelector('[data-btn-borrar]');
        
        btn_borrar.addEventListener('click',()=>{
            let id = btn_borrar.id;
            server.eliminarUsuario(id)
            .then(response => console.log(response))
            .catch(err => alert(err))
        });

        
        return tr;  
    }
   
    
    
    server.listaRegistro()
    .then(data => {
        data.forEach(({nombre,email,telefono,localidad,id}) => {
            let nuevaLinea = mostrandoUsuario(nombre,email,telefono,localidad,id)
            tbody.appendChild(nuevaLinea)    
        })  
    });
    