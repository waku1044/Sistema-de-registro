import { server } from "../server_cliente/server.js";

const form = document.querySelector('[data-formulario]');



const obtenerInfo = ()=>{
    let url = new URL(window.location);
    let id = url.searchParams.get("id");
    
    if(id == null){
        window.location.href = './error.html'
    }
    let nombre = document.querySelector('[data-nombre]');
    let email = document.querySelector('[data-email]');
    let phone = document.querySelector('[data-phone]');
    let localidad = document.querySelector('[data-localidad]');

    server.detalleUsuario(id).then(perfil =>{
        nombre.value = perfil.nombre;
        email.value = perfil.email;
        phone.value = perfil.telefono;
        localidad.value = perfil.localidad;
    }) 
}

form.addEventListener('submit',(event)=>{
    let url = new URL(window.location);
    let id = url.searchParams.get("id");
    event.preventDefault();
    let nombre = document.querySelector('[data-nombre]').value;
    let email = document.querySelector('[data-email]').value;
    let phone = document.querySelector('[data-phone]').value;
    let localidad = document.querySelector('[data-localidad]').value;
    console.log(nombre,email,phone,localidad)
    server.actualizarUsuario(nombre,email,phone,localidad,id).then((response) =>{ 
         window.location.href = './registroExitoso.html'})
    })
    obtenerInfo();

