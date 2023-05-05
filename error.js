const btn_inicio = document.querySelector('[data-btn-inicio]');

const volverAInicio = ()=>{
    window.location.href = '/registros.html';
}

btn_inicio.addEventListener('click',volverAInicio)