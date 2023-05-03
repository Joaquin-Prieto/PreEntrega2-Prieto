class Usuario {
    constructor( mail, contraseña, tarjetacredito){
        this.mail = mail;
        this.contraseña = contraseña;          
        this.tarjetacredito = tarjetacredito;
    }}

    const usuariosLista = []

function ingresarUsuario(){
    alert("Crea tu cuenta de Planeta Guitarra")
    let mail = prompt ("Ingrese un mail");
    let contraseña = prompt ("Ingrese su contraseña");    
    let tarjetacredito = prompt("Ingrese su numero de Tarjeta de credito");
    let nuevoUsuario = new Usuario( mail, contraseña, tarjetacredito);
    usuariosLista.push(nuevoUsuario);
    console.log(usuariosLista)
}
ingresarUsuario()

//FUNCION BOTON "HAZ CLICK AQUI" (ACCIONES CON GUITARRAS)
function GUITARRAS(){
class Guitarra {
    constructor(opcionNumero, guitarMarca, guitarModelo, guitarNeck, guitarColor, precio) {
        this.opcionNumero = opcionNumero;
        this.guitarMarca = guitarMarca;
        this.guitarModelo = guitarModelo;
        this.guitarNeck = guitarNeck;
        this.guitarColor = guitarColor;
        this.precio = precio;
      }
      cambioDePrecio(precio) {
        if (typeof precio == "number") {
          this.precio = precio;
        }
      }
      toString() {
        return`
        Opcion Numero: ${this.opcionNumero}\n
        Marca: ${this.guitarMarca}\n
        Modelo: ${this.guitarModelo}\n
        Material: ${this.guitarNeck}\n
        Color del cuerpo: ${this.guitarColor}\n
        Precio en USD: ${this.precio}`;
      }
}



const guitarra1= new Guitarra(1, "Fender", "Stratocaster", "arce tostado", "Siena y rojo", 0);
const guitarra2= new Guitarra(2, "Gibson","Les Paul", "Maple", "Dorado", 0);
const guitarra3= new Guitarra(3, "Fender","Telecaster","Maple", "Space blue", 0);
const guitarra4= new Guitarra(4, "EVH", "Frankie", "Maple", "Classic striped", 0);

const arrayGuitarras= [guitarra1, guitarra2, guitarra3, guitarra4];
console.log(arrayGuitarras);

guitarra1.cambioDePrecio(450);
guitarra2.cambioDePrecio(520);
guitarra3.cambioDePrecio(395);
guitarra4.cambioDePrecio(400);

//MENU GUITARRAS

function menu(){
    alert("Te damos la bienvenida a Planeta Guitarra");
    let opcion= parseInt(prompt("Seleccione una opción: \n\n 1) Comprar Guitarra \n\n 2) Salir" ));
    return opcion;
}

//FUNCION REGISTRO
const usdAr = (precio, usa) => {
    const calcular = precio * usa;
    return calcular; };
    
    let usa = 475;
    let resultado = usdAr("", usa);

    //FUNCION DE COMPRA
function comprarStock(){
  alert(guitarra1);
  alert(guitarra2);
  alert(guitarra3);
  alert(guitarra4);
  const opcionElegida = Number(prompt("Elige la opcion que quieres"));
  
    switch(opcionElegida){
        case 1: 
        alert("Su eleccion: \nFender Stratocaster");
        resultado = usdAr(guitarra1.precio, usa);
        alert("El precio en pesos es  $" + resultado);
        
        let respuestaCompra1 = prompt("Desdea realizar la compra? (si/no)")
        if(respuestaCompra1 === "si"){
            function buscarTarjeta(ingresarTarjeta) {
                let comprobarTarjeta = prompt("Ingrese su tarjeta de credito");
                return ingresarTarjeta.tarjetacredito == comprobarTarjeta;}
                              
            let resultadoTarjeta = usuariosLista.find(buscarTarjeta);
            if (resultadoTarjeta == undefined) {
             alert("Su tarjeta no coincide con la registrada en la cuenta,\nsi quieres cambiarla vuelve a registrarte");
            } else {
            alert("compra realizada!");
            alert("Esperamos verlo nuevamente");;
            }
            
        }else if(respuestaCompra1 === "no"){
            alert("Compra cancelada.")
            alert("Esperamos verlo nuevamente");
        }else{
            alert("respuesta no valida, vuelve a intentar.")
        }
        break;
        case 2:
            alert("Su eleccion: \nGibson Les Paul");
            resultado = usdAr(guitarra2.precio, usa);
            alert("El precio en pesos es  $" + resultado);            
            let respuestaCompra2 = prompt("Desdea realizar la compra? (si/no)")
            if(respuestaCompra2 === "si"){
                function buscarTarjeta(ingresarTarjeta) {
                    let comprobarTarjeta = prompt("Ingrese su tarjeta de credito");
                    return ingresarTarjeta.tarjetacredito == comprobarTarjeta;}
                 
                    
                let resultadoTarjeta = usuariosLista.find(buscarTarjeta);
                if (resultadoTarjeta == undefined) {
                 alert("Su tarjeta no coincide con la registrada en la cuenta,\nsi quieres cambiarla vuelve a registrarte");
                } else {
                alert("compra realizada!");
                alert("Esperamos verlo nuevamente");;
                }
                
            }else if(respuestaCompra2 === "no"){
                alert("Compra cancelada.")
                alert("Esperamos verlo nuevamente");
            }else{
                alert("respuesta no valida, vuelve a intentar.")
            }
        break;
        case 3:
            alert("Su eleccion: \nFender Telecaster");
            resultado = usdAr(guitarra3.precio, usa);
            alert("El precio en pesos es  $" + resultado);
            
            let respuestaCompra3 = prompt("Desdea realizar la compra? (si/no)")
            if(respuestaCompra3 === "si"){
                function buscarTarjeta(ingresarTarjeta) {
                    let comprobarTarjeta = prompt("Ingrese su tarjeta de credito");
                    return ingresarTarjeta.tarjetacredito == comprobarTarjeta;}
                   
                    
                let resultadoTarjeta = usuariosLista.find(buscarTarjeta);
                if (resultadoTarjeta == undefined) {
                 alert("Su tarjeta no coincide con la registrada en la cuenta,\nsi quieres cambiarla vuelve a registrarte");
                } else {
                alert("compra realizada!");
                alert("Esperamos verlo nuevamente");;
                }
                
            }else if(respuestaCompra3 === "no"){
                alert("Compra cancelada.")
                alert("Esperamos verlo nuevamente");
            }else{
                alert("respuesta no valida, vuelve a intentar.")
            }
        break;
        case 4:
            alert("Su eleccion: \nEVH Frankie");
            resultado = usdAr(guitarra4.precio, usa);
            alert("El precio en pesos es  $" + resultado);
            
            let respuestaCompra4 = prompt("Desdea realizar la compra? (si/no)")
            if(respuestaCompra4 === "si"){
                function buscarTarjeta(ingresarTarjeta) {
                    let comprobarTarjeta = prompt("Ingrese su tarjeta de credito");
                    return ingresarTarjeta.tarjetacredito == comprobarTarjeta;}
            
                    
                let resultadoTarjeta = usuariosLista.find(buscarTarjeta);
                if (resultadoTarjeta == undefined) {
                 alert("Su tarjeta no coincide con la registrada en la cuenta,\nsi quieres cambiarla vuelve a registrarte");
                } else {
                alert("compra realizada!");
                alert("Esperamos verlo nuevamente");;
                }
                
            }else if(respuestaCompra4 === "no"){
                alert("Compra cancelada.")
                alert("Esperamos verlo nuevamente");
            }else{
                alert("respuesta no valida, vuelve a intentar.")
            }
        break;
        default:
            alert("Ese no es un dato válido");
        break;
    }
}


//FUNCION PARA SALIR DEL MENU

function salir(){
    alert("Gracias por confiar en nosotros.");
}

//FUNCIONES DE LA PAGINA

let opcion= menu();
switch (opcion){
    case 1:
        comprarStock();
        break;
    case 2:
        salir();
        break;
    default:
        alert("Opcion no valida");
        break;    
}}