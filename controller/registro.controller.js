import { server } from '../server_cliente/server.js'

const form = document.querySelector('[data-form]');

form.addEventListener('submit',()=>{
    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;
    const phone = document.querySelector('[data-telefono]').value;
    const localidad = document.querySelector('[data-localidad]').value;
    // console.log(nombre,email,phone,localidad)
    server
    .crearUsuario(nombre,email,phone,localidad)
    .then(response => console.log(response))
    .catch(err => alert('Algo salio mal men'))
})