let carrito;
if(JSON.parse(localStorage.getItem('carrito')))  {
    carrito = JSON.parse(localStorage.getItem('carrito'))
} else {
    localStorage.setItem('carrito', JSON.stringify([]))
    carrito = JSON.parse(localStorage.getItem('carrito'))
}



function eliminar() {



    const btnEliminar = document.getElementsByClassName("borrarArticulo");
    console.log(btnEliminar)
    for(let i =0; i < btnEliminar.length ; i++){
            btnEliminar[i].addEventListener("click", () => {

               alert("Eliminaste este producto")
                
           

            })   
}


}




const totalCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0)
}


function realizarCompra (){
        alert("Compra realizada")
}
            
function BorrarCompra ()
{
    alert("Vaciaste el carrito")
    
}

const body = document.getElementById('carrito');
if(carrito.length == 0){
    const texto = `
    <div class='cartContainer'>
    <h1 class='txtCarrito'>No hay productos en el carrito</h1>
    <a class='btnVolver' href='index.html'>
    <button>VOLVER</button>
    </a>
    </div>`;    
    body.innerHTML += texto;
} else {
    

    const titulo = `
        <div class='cartContainer'>
        
            <h1 class='txtCarrito'>C A R R I T O</h1>
        </div>`;
    body.innerHTML += titulo;
    const table = `
        <div class='tableContainer'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th class='txtTabla'>Productos</th>
                        <th class='txtTabla'>Unidades</th>
                        <th class='txtTabla'>Precio</th>
                    </tr>
                </thead>
                <tbody id='tbody'>
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th></th>
                        <th class='txtTotal'>Total:</th>
                        <th id='total'>$${totalCarrito().toLocaleString()}</th>
                    </tr>
                </tfoot>
            </table>
            </div>
           `
              
            body.innerHTML += table
            const tbody = document.getElementById('tbody')
            for (let i = 0; i < carrito.length; i++) {
                const element = carrito[i];
                const { id, nombre, img, precio, cantidad } = element;
                const cart = `
                <tr id=${id}>
                <th class ="borrarArticulo" ><img class='trash' src='./assets/eliminar.png' alt='foto borrar'></th>
                <th class='detallesTabla'> <img class='imgProdCart'  src=${img} alt='foto producto'><span class='nombreProd'>${nombre}</span></th>
                    <th>${cantidad}</th>
                    <th>$${(cantidad * precio).toLocaleString()}</th>
                </tr>`
                tbody.innerHTML += cart
                
            }




                        const EfectuarCompra = document.getElementById('botones')
                        const Confir = document.createElement('button')
                        const Content = `
                                            <button  type=button class=divBotones >
                                                Confirmar Compra
                                            </button>
                                         ` 
                         Confir.innerHTML = Content;

                        Confir.addEventListener("click", () => {     realizarCompra()        })  

                        EfectuarCompra.appendChild(Confir)


                        const vaciarCarrito = document.createElement('button')
                        const Content2 = `
                                            <button  type=button  class=divBotones >
                                                Vaciar Carrito
                                            </button>
                                         `
                         vaciarCarrito.innerHTML = Content2;

                        vaciarCarrito.addEventListener("click", () => {     BorrarCompra()        })  

                        EfectuarCompra.appendChild(vaciarCarrito)

}



 eliminar() 
