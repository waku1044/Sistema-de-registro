const parent = document.querySelectorAll('.parent');
const btn_edit = document.querySelectorAll('[data-btn-editar]');
const btn_borrar = document.querySelectorAll('[data-btn-borrar]');

btn_borrar.forEach(btn => btn.addEventListener('click',borrar));

btn_edit.forEach(data => data.addEventListener('click',editar));
function editar(e){
    
};


function borrar(e){  
     e.target.parentNode.parentNode.remove();
}

console.log('Estamos en registros')



