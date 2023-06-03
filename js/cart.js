

/* const carritoVacio = document.getElementById("carrito-vacio");
 */const ProdContainer = document.getElementById("cart-cont");
 const carritoCompra = document.getElementById("item-carrito");
let botonesEliminar = document.querySelectorAll(".btn-danger")
const botonVaciar = document.querySelector("#btn_empty")

const btnComprar = document.querySelector("#btn_buy")
const carritoEmpty = document.getElementById("#carrito-vacio")

/*     carritoVacio.classList.add("disabled") */




function cargarProductosCarrito(){
    if(carrito.length >= 1){


  



 let listaGuitarrasCarrito = "";
carrito.forEach((guitarra) => {
    listaGuitarrasCarrito += `            
        <div class="cart-row">
                <div class="cart-item cart-column">
                    <img class="cart-item-image" src="${guitarra.imgCarrito}" width="100" height="100">
                    <span class="cart-item-title">${guitarra.modelo}</span>
                </div>
                <span class="cart-price cart-column">ARS ${guitarra.precio}</span>
                <div class="cart-quantity cart-column">
                <button class="btn-suma-resta" onclick="restar(${guitarra.id})">➖</button>
                <p class="numero">${guitarra.cantidad}</p><br>
                <button class="btn-suma-resta" onclick="sumar(${guitarra.id})">➕</button>
                    <button id="btnRemove${guitarra.id}" class="btn btn-danger boton-eliminar-carrito" type="button" >Eliminar</button>
                </div>
            </div>
    `;
});


carritoCompra.innerHTML = listaGuitarrasCarrito
console.log(carrito)
console.log("anda")


}else{
 carritoCompra.innerHTML = "<br><br><p id='carritoVacio'>Tu carrito esta vacio</p><br><br>"
}
actualizarTotal()
updateElimBtn()


}
cargarProductosCarrito()


function updateElimBtn(){
    botonesEliminar = document.querySelectorAll(".boton-eliminar-carrito")

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}
function eliminarDelCarrito(e){

    const idBoton = e.currentTarget.id;    
   console.log(carrito)
  carrito.splice(idBoton,1)
    console.log(carrito)
    cargarProductosCarrito()
    location.reload()
    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito)); 
   
}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {

    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        html: `Se van a borrar ${carrito.reduce((acc, producto) => acc + producto.cantidad, 0)} productos.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            carrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
            cargarProductosCarrito();
            location.reload()
        }
      })
}
function sumar(id){
    carrito[carrito.findIndex(guitarra => guitarra.id == id)].cantidad += 1
 
    carrito[carrito.findIndex(guitarra => guitarra.id == id)].precioTotal = carrito[carrito.findIndex(guitarra => guitarra.id == id)].cantidad * carrito[carrito.findIndex(guitarra => guitarra.id == id)].precio

    cargarProductosCarrito(carrito)
    actualizarTotal()
    localStorage.setItem("productos-en-carrito", JSON.stringify(carrito))
}

function restar(id) {
    
    
    if (carrito[carrito.findIndex(guitarra => guitarra.id == id)].cantidad > 0) {
        carrito[carrito.findIndex(guitarra => guitarra.id == id)].cantidad -= 1

       
        carrito[carrito.findIndex(guitarra => guitarra.id == id)].precioTotal = carrito[carrito.findIndex(guitarra => guitarra.id == id)].cantidad * carrito[carrito.findIndex(guitarra => guitarra.id == id)].precio


        cargarProductosCarrito(carrito)
        actualizarTotal()
        localStorage.setItem("productos-en-carrito", JSON.stringify(carrito))
    }
}


function actualizarTotal() {
    var precioTotal = document.getElementById("precio-total")
    var totalCalculado = carrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
      console.log(totalCalculado) ;
      precioTotal.innerText = "$" + totalCalculado;
}

function reloadPage(){
    location.reload()
}

function comprarCarrito() {
    if(carrito.length >= 1){
Swal.fire({
        position: 'center',
        icon: 'success',
        title: '¡Su compra ha sido realizada con exito!',
        showConfirmButton: true,
       width: 600,
      })
      carrito.length = 0;
      localStorage.setItem("productos-en-carrito", JSON.stringify(carrito));
      cargarProductosCarrito()
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Parece que no tienes nada en el carrito',
            

          })
    }
    
    
    }
    