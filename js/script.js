
function toggleCart(){
    var x = document.getElementById("seccion-carrito");
    if (x.style.display === "none"){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}

const guitarras= [
    {id: 1, picture: "./img/StratoOlympicPearl.png", modelo: "Fender Stratocaster Player Plus", precio:213750, imgCarrito: "./img/StratoOlympicPearl(cart).png"},
    {id: 2, picture: "./img/GibsonLPGolden.png", modelo: "Gibson Les Paul Goldtop - Gold", precio: 247000, imgCarrito: "./img/GibsonLPGolden(cart).png"},
    {id: 3, picture: "./img/TelecasterDarkNight.png", modelo: "Fender Telecaster American Professional II", precio: 187600, imgCarrito: "./img/TelecasterDarkNight(cart).png"},
    {id: 4, picture: "./img/EVHFrankie.png", modelo: "EVH Sriped Series Frankenstein", precio: 190000, imgCarrito: "./img/EVHFrankie(cart).png"}
]
let carrito = [];

const stock = document.getElementById("stock")

let cartasGuitarras = "";
guitarras.forEach((guitarra) => {
    cartasGuitarras += `
    <div class="cards">
                <div class="cardImg"><img src="${guitarra.picture}" alt="img"></div>
                <div class="cardTxt">
                    <p>${guitarra.modelo}</p>
                    <span>ARS ${guitarra.precio}</span>
                    <button class="btn-añadir-carrito" id="${guitarra.id}" onclick="añadir(${guitarra.id})">Añadir</button>
                </div>
            </div>
    `
});
stock.innerHTML = cartasGuitarras

function añadir(id) {
    
    let guitarraSeleccionada = guitarras.find(instrument => instrument.id == id)
    console.log(guitarraSeleccionada)
    
    if (carrito.some(instrument => instrument.id == id)) {

        
        let indice = carrito.findIndex(instrument => instrument.id == id)
        
        carrito[indice].cantidad += 1
        
        carrito[indice].precioTotal = carrito[indice].cantidad * carrito[indice].precio
        
        console.log("true")



    } else {

        console.log("false")
      
        const nuevoProductoCarrito = {
            id: guitarraSeleccionada.id,
            imgCarrito: guitarraSeleccionada.imgCarrito,
            modelo: guitarraSeleccionada.modelo,
            precio: guitarraSeleccionada.precio,
            cantidad: 1,
            precioTotal: parseInt(guitarraSeleccionada.precio)
            //el precioTotal arranca con el valor unitario parseado porque luego hay que multiplicarlo

        }

        
        carrito.push(nuevoProductoCarrito)
        console.log(carrito)
    }
    renderCarrito(carrito)
    
    calcularTotal()
}



function renderCarrito(cart) {
    console.log(cart)
    const carritoCompra = document.getElementById("item-carrito")

    let listaGuitarrasCarrito = "";
    cart.forEach((guitarra) => {
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
                        <button id="btnRemove${guitarra.id}" class="btn btn-danger" type="button" onclick="eliminar(${guitarra.id})">Eliminar</button>
                    </div>
                </div>
        `;
    });


    carritoCompra.innerHTML = listaGuitarrasCarrito
    console.log("anda")
   
}



function eliminar(id) {
    const carritoCompra = document.getElementById("item-carrito")
    console.log(id)
    
    let nuevoCarrito = carrito.filter(instrument => instrument.id !== id)
    console.log(nuevoCarrito)
   
    carrito = [...nuevoCarrito]
  
    carritoCompra.innerHTML = "<p>Carrito Vacío</p>";
   
    renderCarrito(nuevoCarrito)
    console.log(carrito) 

    calcularTotal()
}



function sumar(id) {
    console.log('suma '+ calcularTotal)
   
    carrito[carrito.findIndex(guitarra => guitarra.id == id)].cantidad += 1
 
    carrito[carrito.findIndex(guitarra => guitarra.id == id)].precioTotal = carrito[carrito.findIndex(guitarra => guitarra.id == id)].cantidad * carrito[carrito.findIndex(guitarra => guitarra.id == id)].precio

    renderCarrito(carrito)
    calcularTotal()
}

function restar(id) {
    console.log('resta '+ calcularTotal)

    
    if (carrito[carrito.findIndex(guitarra => guitarra.id == id)].cantidad > 0) {
        carrito[carrito.findIndex(guitarra => guitarra.id == id)].cantidad -= 1

       
        carrito[carrito.findIndex(guitarra => guitarra.id == id)].precioTotal = carrito[carrito.findIndex(guitarra => guitarra.id == id)].cantidad * carrito[carrito.findIndex(guitarra => guitarra.id == id)].precio


        renderCarrito(carrito)
        calcularTotal()
    }
}

//botón de vaciar carrito

function vaciar() {
    console.log("vaciar")
    carrito = []
    renderCarrito(carrito)
    calcularTotal()
    alert('Su compra ha sido realizada!')

}

//cálculo total

function calcularTotal() {
    const totalCarrito = carrito.map(item => item.precioTotal).reduce((prev, curr) => prev + curr, 0);
    console.log(totalCarrito)
    let total = document.getElementById("precio-total")
    total.innerText = `ARS ${totalCarrito}`
}
calcularTotal()
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