

let guitarras = [];

//recuperar los datos del JSON
 fetch("./js/productos.json")
    .then(response =>  response.json())
    .then(data => {
        guitarras = data;
        renderProducts(guitarras);
       
       
    })



const stock = document.getElementById("stock")

const contenedorProductos = document.querySelector("#stock")
let botonesAgregar = document.querySelectorAll(".btn-añadir-carrito")
const cartQty = document.querySelector("#cart_qty")


function renderProducts(){
    let cartasGuitarras ="";
    guitarras.forEach(guitarra => {
    cartasGuitarras += `
    <div class="cards">
                <div class="cardImg"><img src="${guitarra.picture}" alt="img"></div>
                <div class="cardTxt">
                    <p>${guitarra.modelo}</p>
                    <span>ARS ${guitarra.precio}</span>
                    <button class="btn-añadir-carrito" id="${guitarra.id}" >Añadir</button>
                </div>
            </div>
    `
});
stock.innerHTML = cartasGuitarras
updateAddBtn()
console.log(botonesAgregar)
console.log(guitarras)
pordefecto()


if(selection == MayorMenor){
MayMen()
}
if(selection == MenorMayor){
MenMay()
}
}
   

//funcion de agregar al carrito 1(separar los ids)
function updateAddBtn(){
    botonesAgregar = document.querySelectorAll(".btn-añadir-carrito");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let carrito;

let productosEnCarritoLocal = localStorage.getItem("productos-en-carrito")




if (productosEnCarritoLocal) {
    carrito = JSON.parse(productosEnCarritoLocal);
    updateCartNum();
} else {
    carrito = [];
}



//funcion para agregar al carrito 2 (encontrrar el objeto por id)
function agregarAlCarrito(e){

  
  Toastify({
    text: "Producto agregado",
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      width:"250px",
      fontweight:"bold",
      background: "red",
      borderRadius: "2rem",
      textTransform: "uppercase",
      fontSize: ".75rem"
    },
    offset: {
        x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
        y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
      },
    onClick: function(){} // Callback after click
  }).showToast();


const idBoton = e.currentTarget.id;
const productoAgregado = guitarras.find(producto => producto.id == idBoton);

if(carrito.some(producto => producto.id == idBoton)){
    const index = carrito.findIndex(producto => producto.id == idBoton);
    carrito[index].cantidad++;

}else{
    productoAgregado.cantidad = 1
    carrito.push(productoAgregado)
}
updateCartNum();


localStorage.setItem("productos-en-carrito", JSON.stringify(carrito))
}
function updateCartNum(){
    let newcartQty = carrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    cartQty.innerText = newcartQty
    if(newcartQty >= 10){
        cartQty.innerText = "9+"
    }
}






/*----------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------*/
/*----------------------------------------------------------------------------------------------------------------------------*/

var checkbox = document.getElementById("ChangeTheme"); 


if (localStorage.getItem("mode") == "dark") {
  darkmode(); 
} else {
  nodark();
}


checkbox.addEventListener("change", function() {
 
  if (checkbox.checked) {
    darkmode(); 
  } else {
    nodark(); 
  }
});


function darkmode() {
  document.body.classList.add("dark-mode");
  checkbox.checked = true; 
  localStorage.setItem("mode", "dark");
}

//function for checkbox when checkbox is not checked
function nodark() {
  document.body.classList.remove("dark-mode"); 
  checkbox.checked = false; 
  localStorage.setItem("mode", "light"); 
}