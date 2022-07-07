const boton=document.querySelector('#formulario');
boton.addEventListener('submit', aplicar);

function aplicar (e){

    e.preventDefault ();
    const valor = document.querySelector('#nombre').value;

    if (valor === ""){
        swal.fire({
            title: 'Error',
            text: 'Campo obligatorio',
            icon: 'Error',
            confirmButtonText: 'Confirmar'
        })
    }
    else {
    swal.fire ({
        title: `${valor}`,
        text: 'Bienvenido',
        icon: 'success',
        confirmButtonText: 'Confirmar',
        })
}    
}