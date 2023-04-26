console.log('Estamos en el index.')

const nombre = document.querySelector('[data-nombre]');
const edad = document.querySelector('[data-edad]');
const telef = document.querySelector('[data-telefono]');
const localidad = document.querySelector('[data-localidad]');
const form = document.querySelector('[data-form]');


function ver(e){
    // e.preventDefault() 
    console.log(nombre.value,edad.value,telef.value,localidad.value);
};
form.addEventListener('submit',ver)